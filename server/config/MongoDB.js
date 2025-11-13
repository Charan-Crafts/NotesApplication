const mongoose = require('mongoose');   

const connectDB = async () => {
    try {
        const response = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`);
        console.log("Connected to DB");
        
    } catch (error) {
        console.log("Error while connecting to DB", error);
        process.exit(1);
    }
}

module.exports = connectDB;