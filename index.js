import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import cors from "cors"
const app = express();

mongoose
.connect("mongodb://127.0.0.1:27017")
.then(() => console.log("connected to db"))
.catch(() => console.log("error while connecting to db"));
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(4000, () => {
  console.log("listening to 4000");
});
