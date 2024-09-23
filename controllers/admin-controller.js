const {createProductSchema} = require("../validators/product");
const cloudinary = require("../config/cloudinary");
exports.adminCreateProduct = async(req, res, next) => {
    try {
        console.log(req.body)
        const data = await createProductSchema.validateAsync(req.body);
        console.log(data)
        const imagePromiseArray = []
        for(let file of files) {
            const promiseUrl = cloudinary.uploader.upload(file.path);
            imagePromiseArray.push(promiseUrl);
        }
        const imageArray = await Promise.all(imagePromiseArray);
        res.json({ message: "create product success" });
    } catch (error) {
        next(error);
    }
}
exports.adminUpdateProduct = (req, res, next) => {
    try {
        res.json({ message: "update product success" });
    } catch (error) {
        next(error);
    }
}
exports.adminDeleteProduct = (req, res, next) => {
    try {
        res.json({ message: "delete product success" });
    } catch (error) {
        next(error);
    }
}

exports.adminUpdateOrderStatus = (req, res, next) => {
    try {
        res.json({ message: "update order status success" });
    } catch (error) {
        next(error);
    }
}