import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDb from "./config/dbConnection.js";

//Routes
import bookRoutes from "./route/book.route.js";
import userRoutes from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;

//Connect to mongo db
connectDb();

//defining Routes
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

//Deployment
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static("frontend/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("started", PORT);
});
