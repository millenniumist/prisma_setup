const {createProductSchema} = require("../validators/product");
exports.adminCreateProduct = async(req, res, next) => {
    try {
        console.log(req.body)
        const data = await createProductSchema.validateAsync(req.body);
        console.log(data)
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