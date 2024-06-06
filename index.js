const express= require("express")
const app= express("")
const port = process.env.port||3000
const mongoose = require("mongoose")
app.use(express.json())
const Product= require('./models/product.model')

// routes
const productRoute=require("./routes/product.route")

app.use('/api/products',productRoute)

mongoose.connect (`mongodb+srv://lnpw786:jWCoCCgIsTZgL8wL@cluster0.e8vnlaw.mongodb.net/`)
.then(()=>{
    console.log(" Mongo Database connected")
})
.catch((error)=>{
    console.log(error.message)
    console.log("Connection failed")
})
    app.post('/api/products',async(req,res)=>{
        const product = await Product.create(req.body)
        res.json (product)
    })

app.get('/api/products',async(req,res)=>{
    const product = await Product.find({})
    res.json (product)
}) 

app.get('/api/products/:id',async(req,res)=>{
    const {id}= req.params
    const product = await Product.findById(id)
    res.json (product)
}) 

app.put('/api/products/:id',async(req,res)=>{
    const {id}= req.params
    const product = await Product.findByIdAndUpdate(id , req.body)
    if (!product){
        res.json("Product not found")
    }
     const UpdatedProduct= await Product.findById(id)
    res.json(UpdatedProduct)
}) 

app.delete('/api/products/:id',async(req,res)=>{
    const {id}= req.params
    const product = await Product.findByIdAndDelete(id , req.body)
    if (!product){
       return res.status(400).json({"message":"Product not found","status":false})
    }
    
    return res.status(200).json({"message":"Product deleted","status":true})
}) 



app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})