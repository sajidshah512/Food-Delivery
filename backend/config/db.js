import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}/foodDB`).then(() => console.log("DB Conneted Successfully"));
}