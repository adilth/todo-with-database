const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const todo = require("./routers/todo");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

mongoose.connect(process.env.CONNECT_DB, { useNewUrlParser: true }, () =>
  console.log("Connect to DB")
);

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
app.listen(PORT, () => console.log("Connected to port "));
