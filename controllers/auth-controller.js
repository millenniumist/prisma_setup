const express = require("express");

exports.login = (req,res,next) => {
    try {
        const {email, password} = req.body
    } catch (error) {
        next(error)
    }
}