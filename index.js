require("dotenv").config()
const express = require("express")
const app = express()
const errorHandler = require("./middlewares/error")
const notFoundHandler = require("./middlewares/not-found")

app.use(express.json())







app.use(errorHandler);
app.use("*",notFoundHandler);


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server running on port ${port}`))