const userModel = require("../models/UserModel")
const mailsend = require("../utils/MailUtils")
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

const createUser =async (req,res)=>{

    try{
         const savedUser = await userModel.insertOne(req.body)
        await mailsend(req.body.email,"Hello")
    res.json({mesage:"user created ",data:savedUser})

    }catch(err){
         console.log(err);
        res.json({err:err})
       
        
    }
    console.log("req body",req.body);
   
}


const deleteUser = async(req,res)=>{

        try{

            const id = req.params.id
            const deletedUser = await userModel.findByIdAndDelete(id)
            if(deletedUser){
                res.status(200).json({
                    message:"user deleted",
                    data:deletedUser
                })
            }else{
                res.status(404).json({
                    message:"user not found to delete"
                })
            }
        }catch(err){
            res.status(500).json({
                message:"error while deleting user",
                err:err
            })
        }
}

const updateUser = async(req,res)=>{

    try{

        const id = req.params.id
        const updataedUser = await userModel.findByIdAndUpdate(id,req.body,{new:true})
        if(updataedUser){
            res.status(200).json({
                message:"user updated",
                data:updataedUser
            })
        }else{
            res.status(404).json({
                message:"user not found to update"
            })
        }
    }catch(err){
        res.status(500).json({
            err:err
        })
    }
}
const updateByAge = async(req,res)=>{
    try{
        const age = req.params.age
        const updatedAge = await userModel.findByIdAndUpdate({age:{$gte:age}},{$set:req.body},{new:true})
        if(updatedAge){
            res.status(200).json({
                message:"users updated",
                data:updatedAge
            })
        }else{
            res.status(404).json({
                message:"user not found to update"
            })
        }
    }catch(err){
         res.status(500).json({
                err:err
            })
    }
}
module.exports = {
    getAllUsers,getUserById,searchUser,createUser,deleteUser,updateUser,updateByAge
}
