const productModel = require('../models/productsModel');

// Create and Save a new product
exports.createProduct = (req, res) => {
    let reqBody = req.body;
    productModel.create(reqBody, (err, data) => {
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}

// Retrieve and return all products from the database.
exports.readProduct = (req, res) => {
    let Query = {};
    let Projection = "ProductName ProductCode ProductImg UnitPrice Quantity TotalPrice";
    productModel.find(Query, Projection, (err, data) => {
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}
