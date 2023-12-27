require("express-async-errors");
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();

const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected db!");
    app.listen(port, () => {
      console.log(`App works on port:${port}`);
    });
  } catch (error) {}
};

start();
