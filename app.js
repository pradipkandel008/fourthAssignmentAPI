const mongoose = require("./db/mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const userRoute = require("./routes/user");
const itemRoute = require("./routes/item");
const uploadRoute = require("./routes/upload");
//const assignmentRoute = require("./routes/assignments");

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

//for handliing cors errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/user", userRoute);
app.use("/item", itemRoute);
app.use("/upload", uploadRoute);
//app.use("/assignments", assignmentRoute);

//error handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
