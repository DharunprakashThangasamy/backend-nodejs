const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const cors = require("cors");

const app = express()


app.use(cors())
app.use(express.json())

//routes

app.get('/',(req,res) => {
    res.send("Hello this is the response from my end : )")
})

// POST Method
app.post('/product', async(req,res) => {
   try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
    
   } catch (error) {
    console.log(error)
    res.status(500).json({message : error.message})
   }
})
//  GET Method

app.get('/products',async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error.message})
    }
})

// GET Method using the id
 

app.get('/product/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error.message})
    }
})

// PUT Method using the id
 
app.put('/product/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        // for invalid product id
        if(!product){
            return res.status(404).json({message : `we couldn't the product with ID : ${id}`})
        }
        const updatedProductItem = await Product.findById(id);
        res.status(200).json(updatedProductItem)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error.message})
    }
})

// DELETE deleting a product from database

app.delete('/product/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message : `cannot find the product with the Id : ${id}`})
        }
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error.message})
    }
})


//setting port number


//mongoose configuration
mongoose.connect('mongodb+srv://prakashdharun11:Elonmusk@productapi.xtnbhss.mongodb.net/Product-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3001, () => {
        console.log(`application connected to port number 3000...`)
    })
}).catch((error) => {
    console.log(error)
})
