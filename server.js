const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const todo = require("./routers/todo");
const edite = require("./routers/edite");
const PORT = process.env.PORT || 3000;
require("dotenv").config({ path: "./config/.env" });
const connectDb = require("./config/db");

//connect db

connectDb();

//middleware
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", todo);
app.use("/edite", edite);
app.listen(PORT, () => console.log("Connected to port "));
