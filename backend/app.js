require("express-async-errors");
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const errorHandler = require("./errors/error-handler");
const notFound = require("./errors/not-found");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());

app.use("api/v1/auth", authRoutes);

//error handler and not found middleware
app.use(notFound);
app.use(errorHandler);

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
