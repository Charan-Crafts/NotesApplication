const mongoose = require("mongoose")

const userSchmea = mongoose.Schema({
    userName:{
        type:String,   
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileUrl:{
        type:String,
        default:"https://i.pinimg.com/736x/30/e9/b8/30e9b8b3d8ec4581a86fbfd13915a86c.jpg"
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

const User = new mongoose.model("User",userSchmea)

module.exports = User