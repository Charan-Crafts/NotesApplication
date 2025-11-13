const jwt = require('jsonwebtoken');


const tokenVerification = async (token) => {
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECERT);
        return { valid: true, payload: decode };
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return { valid: false, expired: true, error: err };
        }
        return { valid: false, error: err };
    }
};

const authMiddleware = async (req, res, next) => {
    try {

        // Check the access token in the cookies and authoriation header

        let token;

        console.log(req.headers);


        if (req.cookies && req.cookies.accessToken) {

            token = req.cookies.accessToken;
        } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }




        if (!token) {
            return res.status(401).json({ message: "Unauthorized access - No token provided", success: false });
        }

        // verify the token
        const result = await tokenVerification(token);

        if (result.valid) {
            req.userId = result.payload.user;
            return next();
        }

        if (result.expired) {
            return res.status(401).json({ message: 'access_token_expired', success: false });
        }

        return res.status(401).json({ message: 'Unauthorized access - Invalid token', success: false });

    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { authMiddleware }