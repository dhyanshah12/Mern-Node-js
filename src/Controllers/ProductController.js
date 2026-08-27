const productModel = require("../models/ProductModel")

const createProduct = async(req,res)=>{

    try{

    }catch(err){
        res.json({
            message:"error while creating products",
            err:err
        })
    }
}
const getallProducts =async(req,res)=>{

    try{
            const products = await productModel.find().populate("categoryId")
            if(products.length>0){
                res.json({
                    message:"products fetched",
                    data:products
                })
            }else{
                res.json({
                    message:"product not found"
                })
            }   
    }catch(err){
        res.json({
            message:"error while fetching products",
            err:err
        })
    }
}
module.exports={
    createProduct,getallProducts
}