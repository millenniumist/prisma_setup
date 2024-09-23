const express = require("express");
const router = express.Router();

router.get("/my-cart", ()=>{})
router.post("/product/:productId", ()=>{})
router.patch("/order-product/:orderProductId", ()=>{})
router.delete("/order-product/:orderProductId", ()=>{})


router.patch("/:orderId", ()=>{}) //checkout แล้วของในcart จะหายไป
router.get("/all",()=>{})
module.exports = router