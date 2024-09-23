require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/not-found");

app.use(cors()); //for allowing cross-origin requests
app.use(express.json());
app.use("/auth", (req, res) => (res.json({message:"working"})));
app.use("/user", (req, res) => (res.json({message:"working"})));
app.use("/product", (req, res) => (res.json({message:"working"})));
app.use("/order", (req, res) => (res.json({message:"working"})));
app.use("/admin", (req, res) => (res.json({message:"working"})));

app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
