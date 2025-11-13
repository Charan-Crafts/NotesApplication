require("dotenv").config()

const express = require("express")
const app = express()

const cors = require("cors")

const cookieParser = require("cookie-parser")

const connectDB = require("./config/MongoDB")

connectDB();

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// Routes

const authRoutes = require("./routes/auth.routes")
const notesRoutes = require("./routes/notes.routes")

app.use("/api/auth",authRoutes)
app.use("/api/notes",notesRoutes)

 
app.listen(process.env.PORT,()=>{console.log("Server is running")})