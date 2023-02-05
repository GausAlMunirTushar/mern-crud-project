const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    ProductName:{
        type: String,
        required: true
    },
    ProductCode:{
        type:String,
    },
    ProductImg:{
        type:string,
        required: true
    },
    UnitPrice:{
        type: String
    },
    Quantity:{
        type: String
    },
    TotalPrice:{
        type: String
    },
    CreatedDate:{
        type: Date,
        default: Date.now()
    }
},{
    versionKey: false
});

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;