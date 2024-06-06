const Product= require('../models/product.model')


const getProducts = async(req,res)=>{
    const product = await Product.find({})
    return res.status(200).json({"message":"get all Product","status":"true"})
} 
const getProduct =async(req,res)=>{
    const {id}= req.params
    const product = await Product.findById(id)
    return res.status(200).json({"message":"Product","status":"message.id"})
}
const createProduct =async(req,res)=>{
    const product = await Product.create(req.body)
    return res.status(200).json({"message":"Product added","status":"message.id"})
}

const updateProduct =async(req,res)=>{
    const {id}= req.params
    const product = await Product.findByIdAndUpdate(id , req.body)
    if (!product){
        return res.status(400).json({"message":"Product not found","status":false})
    }
     const UpdatedProduct= await Product.findById(id)
     return res.status(200).json({"message":"Product updated","status":true})
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