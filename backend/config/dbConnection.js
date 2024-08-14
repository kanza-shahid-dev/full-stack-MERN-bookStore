import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database Connected", connect.connection.name);
  } catch (err) {
    console.log("connection error", err);
    process.exit(1);
  }
};

export default connectDb;
