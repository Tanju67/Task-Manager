require("express-async-errors");
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connect");
const errorHandler = require("./errors/error-handler");
const notFound = require("./errors/not-found");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const app = express();

app.use(express.json());

//cookie parser
app.use(cookieParser());

//cors middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1", taskRoutes);

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
