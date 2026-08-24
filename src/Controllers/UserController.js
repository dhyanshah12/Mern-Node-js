const userModel = require("../models/UserModel")

const getAllUsers = async(req,res)=>{
       
        const users = await userModel.find()
        res.json({message : "get all user...",data:users})
}


const getUserById = async(req,res)=>{

    const id = req.params.id

    // const foundUser = await userModel.find({_id})
    // const foundUser = await userModel.findById({_id:id})
    const foundUser = await userModel.findById(id)
    if(foundUser){
        res.json({
            message:"user found",
            data : foundUser
        })
    }else{
        res.json({
            message:"user not found",
        })
    }

    
    // console.log("params...",req.params);
    // console.log(req.params.id);
    res.json({message:"get user by id called....",id:req.params.id})
}
const searchUser = async(req,res)=>{

        const data= req.query
        console.log(data);
        res.json({data:data})
    }
module.exports = {
    getAllUsers,getUserById,searchUser
}