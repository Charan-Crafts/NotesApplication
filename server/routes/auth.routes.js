const express = require("express")

const router = express.Router()

const authController = require("../controllers/auth.controller")

const { authMiddleware } = require("../middlewares/auth.middleware")

router.post("/signup", authController.userRegistration)

router.post("/login", authController.userLogin)

router.post("/logout", authMiddleware, authController.userLogout)

// refresh access token
router.post("/refresh", authController.refreshAccessToken)


module.exports = router 