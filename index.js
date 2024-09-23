require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/not-found");
const adminRoutes = require("./routes/admin-route");
const authRoutes = require("./routes/auth-route");
const productRoutes = require("./routes/product-route");
const orderRoutes = require("./routes/order-route");
const userRoutes = require("./routes/user-route");
const authenticate = require("./middlewares/authenticate");
const admin = require("./middlewares/admin");

app.use(cors()); //for allowing cross-origin requests
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/admin", authenticate, admin, adminRoutes);

app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
