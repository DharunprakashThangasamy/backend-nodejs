const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        productId : {
            type : String,
            required : [true, "Please enter the productId"]
        },
        productName : {
            type : String,
            required : [true, "Please enter the product Name"]
        },
        productPrice : {
            type : String,
            required : true,
            default : 0
        },
        productQuantity : {
            type : String,
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