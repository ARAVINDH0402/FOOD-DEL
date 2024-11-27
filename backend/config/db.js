import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saravindh04:04021999@cluster0.vlv5k.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}