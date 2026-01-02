import mongoose from 'mongoose'
import env from 'env'

env.config();

const connectDb = mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`DB is connected on ${process.env.MONGO_URI}`);
})
.catch((err) => {
    console.log(`error in connecting to DB ${err}`);
})

export default connectDb;