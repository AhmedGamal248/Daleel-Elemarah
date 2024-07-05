import mongoose from "mongoose";
import 'dotenv/config'

export const DBconnection = () => {
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
        console.log('database connected successfuly...')
    }).catch((err)=>{
        console.log('database err connection',err)
    })
}  