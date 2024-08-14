import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "../config/dbConnection.js";

//Routes
import bookRoutes from "./route/book.route.js";

const app = express();

app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;

//Connect to mongo db
connectDb();

//defining Routes
app.use("/book", bookRoutes);

app.listen(PORT, () => {
  console.log("started", PORT);
});
