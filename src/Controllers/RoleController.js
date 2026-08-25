const roleModel = require("../models/RoleModel")

const getallRoles = async(req,res)=>{

            const roles = await roleModel.find()
            res.json({message:"get all role...",data:roles})
}

const createRole =async (req,res)=>{

    try{
         const savedRole = await roleModel.insertOne(req.body)
         console.log("req body",req.body);
    res.json({mesage:"role created ",data:savedRole})
    }catch(err){
        res.json({err:err})
    }
    
              
}
module.exports = {
    getallRoles,createRole
}
