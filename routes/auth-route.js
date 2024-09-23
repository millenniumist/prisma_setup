const express = require("express");
const router = express.Router();

router.post("/register", ()=>{})
router.post("/login", ()=>{})
router.post("/forget-password", ()=>{})
router.post("/reset-password/:token", ()=>{})
router.post("/confirm-register/:token", ()=>{}) 





module.exports = router;