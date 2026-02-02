import mongoose from "mongoose";

const connectDb = async (mongoUri) => {
  if (!mongoUri) {
    throw new Error("Missing MONGO_URI");
  }
  await mongoose.connect(mongoUri);
  return mongoose.connection;
};

export default connectDb;
