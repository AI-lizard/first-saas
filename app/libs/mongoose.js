import mongoose from "mongoose";

const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.MongoURI);
  } catch (e) {
    console.error("Error connecting to MongoDB", e.message);
  }
};

export default connectMongoose;
