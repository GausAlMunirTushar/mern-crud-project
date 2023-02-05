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

// Update a product identified by the productId in the request
exports.updateProduct = (req, res) => {
    let id = req.params.id;
    let Query = {_id: id};
    let reqBody = req.body;
    productModel.updateOne(Query, reqBody, (err, data) => {
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}

// Delete a product with the specified productId in the request
exports.deleteProduct = (req, res) => {
    let id = req.params.id;
    let Query = {_id: id};
    productModel.remove(Query,(err, data) => {
        if(err){
            res.status(400).json({status: "failed", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}