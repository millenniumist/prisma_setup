const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
const upload = require("../middlewares/upload");

router.post("/product", upload.array("images", 5),adminController.adminCreateProduct)
router.patch("/product/:productId", adminController.adminUpdateProduct)
router.delete("/product/:productId", adminController.adminDeleteProduct)

//update order status => from status PENDING => PACKING
router.patch("/order/:orderId/:status", adminController.adminUpdateOrderStatus)

module.exports = router