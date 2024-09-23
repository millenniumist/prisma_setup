const createError = require("../utils/createError")

const admin = (req, res, next) => {
    try {
        console.log(req.user)
        if(req.user.role !== "ADMIN"){
            return createError(403, "Only admin can access this route");
    } 
    next()
    } catch (error) {
        next(error)
    }
}

module.exports = admin