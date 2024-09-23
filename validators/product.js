const joi = require("joi");

exports.createProductSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().precision(2).required(),
    stock: joi.number().integer().required(),
    detail: joi.string().optional(),
    length: joi.number().integer().min(0).optional(),
    width: joi.number().integer().min(0).optional(),
    height: joi.number().integer().min(0).optional(),
    weight: joi.number().integer().min(0).optional(),
    categoryId: joi.number().integer().required()
})