import dotenv from "dotenv";

import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log('MONGODB CONNECTION FAILED:', err);
})

// import express from "express";

// const app = express();

// ( async () => {
//     try{
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log('ERROR:', error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is running on port ${process.env.PORT}`);
//         })
//     }catch( error ){
//         console.error( "ERROR: ", error);
//         throw error
//     }
// })()