import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB =async ()=>{
        try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`\n MongoDb Connected!! DB Host: ${connectionInstance.connection.host}`)
        } catch (error) {
            console.error("MongoDb connection error", error)
            process.exit
        }
}

export default ConnectDB;