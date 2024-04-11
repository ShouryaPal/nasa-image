import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  const url = process.env.MONGO_URL as string;

  try {
    await mongoose.connect(url);
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
