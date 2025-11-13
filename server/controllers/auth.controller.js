
const userModel = require('../models/user.models');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const convertPasswordToHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword
}

// Update the code when deploying to production
const options = {
    httpOnly: false,
    secure: false,
}

const generateAccessTokenAndRefreshToken = async (userId) => {

    const accessToken = jwt.sign({ user: userId }, process.env.ACCESS_TOKEN_SECERT, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN });

    const refreshToken = jwt.sign({ user: userId }, process.env.REFRESH_TOKEN_SECERT, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN });


    

    return { accessToken, refreshToken };


}
const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {

        // Check the user existance

        const isUser = await userModel.findOne({ email })

        if (!isUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Now compare the password

        const isPasswordTrue = await bcrypt.compare(password, isUser.password);

        if (!isPasswordTrue) {
            return res.status(401).json({ message: "Invalid credentials", success: false });
        }

        // Generate access token and refresh token

        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(isUser._id);


        


        // Update the refresh token in the database

        isUser.refreshToken = refreshToken;

        await isUser.save();

        const userLogin = await userModel.findById(isUser._id).select("-password -__v -refreshToken");




        //Set the cookies

        res.cookie("accessToken", accessToken, options)

        res.cookie("refreshToken", refreshToken, options)

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                user: userLogin,
                accessToken,
                refreshToken
            }
        })

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const userRegistration = async (req, res) => {

    const { userName, email, password } = req.body;

    try {

        // Check the user existance

        const isUser = await userModel.findOne({ email })

        if (isUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Now bcrypt the password and store the user

        const hashedPassword = await convertPasswordToHash(password);

        const newUser = new userModel({
            userName,
            email,
            password: hashedPassword,

        });


        const savedUser = await userModel.create(newUser);


       

        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(savedUser._id);

        savedUser.refreshToken = refreshToken;

        const userRegistration = await userModel.findById(savedUser._id).select("-password -__v -refreshToken");

        // Now set the cookies


        res.cookie("accessToken", accessToken, options);

        res.cookie("refreshToken", refreshToken, options);

        return res.status(200).json({
            message: "User registered successfully",
            data: {
                user: userRegistration,
                accessToken,
                refreshToken
            },
            success: true
        })


    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ message: "Internal server error", error: error.message, success: false });
    }
}

const userLogout = async (req, res) => {

    try {
        
        
        const userId = req.userId;

        
    
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized access - No user id found", success: false });
        }

        // Remove the access token and refresh token from cookies

        res.clearCookie("accessToken", options);
        res.clearCookie("refreshToken", options);

        // Now also find the user and remove the refresh token from database

        const user = await userModel.findById(userId);
        user.refreshToken = ""

        await user.save();

        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        })
    } catch (error) {

    }
}

module.exports = { userRegistration, userLogin, userLogout };