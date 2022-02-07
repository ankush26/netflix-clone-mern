import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./routes/auth.js";

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

app.use(express.json())

app.use("/api/auth", authRoute);

app.listen(5000, () => console.log("server started"));
