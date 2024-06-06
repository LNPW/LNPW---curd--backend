const Product= require('../models/product.model')


const getProducts = async(req,res)=>{
    const product = await Product.find({})
    res.json (product)
} 
const getProduct =async(req,res)=>{
    const {id}= req.params
    const product = await Product.findById(id)
    res.json (product)
}
const createProduct =async(req,res)=>{
    const product = await Product.create(req.body)
        res.json (product)
}

const updateProduct =async(req,res)=>{
    const {id}= req.params
    const product = await Product.findByIdAndUpdate(id , req.body)
    if (!product){
        res.json("Product not found")
    }
     const UpdatedProduct= await Product.findById(id)
    res.json(UpdatedProduct)
}
const deleteProduct =async(req,res)=>{
    const {id}= req.params
    const product = await Product.findByIdAndDelete(id , req.body)
    if (!product){
      return  res.status(400).json({"message":"Product not found","status":false})
    }
    
   return  res.json({"message":"Product deleted","status":true})
}

module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

}