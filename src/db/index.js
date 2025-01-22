import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTION SUCCESSFUL DB HOST: ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.log('MONGODB CONNECTION ERROR:', error);
        process.exit(1);
    }
}

export default connectDB;