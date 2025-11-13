const jwt = require('jsonwebtoken');


const tokenVerification = async(token) => {

    const decode =  jwt.verify(token, process.env.ACCESS_TOKEN_SECERT);

    console.log(decode);
    
    return decode;
}

const authMiddleware = async(req,res,next)=>{
    try {

        // Check the access token in the cookies and authoriation header

        let token ;

        console.log(req.headers);
        

        if(req.cookies && req.cookies.accessToken){

            token = req.cookies.accessToken;
        } else if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];
        }

       
        

        if(!token){
            return res.status(401).json({message:"Unauthorized access - No token provided",success:false});
        }

        // verify the token

        const decoded = await tokenVerification(token);

        console.log(decoded);
        

        if(!decoded){
            return res.status(401).json({message:"Unauthorized access - Invalid token",success:false});
        }

        req.userId = decoded.user;

        next();
        
    } catch (error) {
        console.log("Error",error);
        return res.status(500).json({message:"Internal server error"})
    }
}

module.exports ={authMiddleware}