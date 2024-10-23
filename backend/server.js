const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow only this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods if needed
    credentials: false, // Enable credentials (if needed)
    allowedHeaders: ["Content-Type"],
  })
);

const port = process.env.PORT || 1337; // You can use environment variables for port configuration

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});