const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        productId : {
            type : Number,
            required : [true, "Please enter the productId"]
        },
        productName : {
            type : String,
            required : [true, "Please enter the product Name"]
        },
        productPrice : {
            type : Number,
            required : true,
            default : 0
        },
        productQuantity : {
            type : Number,
            required : true,
            default : 0
        },
        productImage : {
            type : String,
            required : false
        }
    },
    {
        timestamps :true
    }
)
const Product = mongoose.model('Product', productSchema);
module.exports = Product;