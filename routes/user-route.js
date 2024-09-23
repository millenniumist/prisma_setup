const express = require("express");
const router = express.Router();

router.get("/me", ()=>{})
router.patch("/", ()=>{})
router.get("address/all", ()=>{})
router.post("/address", ()=>{})
router.patch("/address/:addressId", ()=>{})
router.delete("/address/:addressId", ()=>{})




module.exports = router;