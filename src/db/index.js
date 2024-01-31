import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv';

dotenv.config({
    path : '.env'
})

const connectDB = async () =>{
    try{        
        console.log(process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        //const connectionInstance = await mongoose.connect(`mongodb+srv://diwaseharsh:harsh123@cluster0.bbxron5.mongodb.net/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.error("MongoDB Error:",err);
        process.exit(1);
    }
}
export default connectDB;