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

const updateStockStatus = async (req,res) => {

    try{
    await productModel.updateMany(
        { stock: 0 },
        { $set: { status: "Out of Stock" } }
    );

    
    await productModel.updateMany(
        { stock: { $gt: 0, $lte: 10 } },
        { $set: { status: "Low Stock" } }
    );

    
    await productModel.updateMany(
        { stock: { $gt: 10 } },
        { $set: { status: "Available" } }
    );

   res.json({
    message:"stock status updated succesfully",
   })
   }catch(err){
    res.status(500).json({
        message:"error while updateing status",
        err:err
    })
   }
};
module.exports={
    createProduct,getallProducts,updateStockStatus
}