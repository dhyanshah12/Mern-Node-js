const EmpModel = require("../models/EmpModel");
const UserModel = require("../models/UserModel");

const getEmp = async(req,res)=>{
            console.log("params...",req.params);
            console.log(req.params.name);
            console.log(req.params.company);
            const emp = await EmpModel.find()
            res.json({message:"get Emp",data:emp})
            
            // res.json({message:"get user by name called...",name:req.params.name,company:req.params.company})   
            res.json({message:`${req.params.name} from ${req.params.company}`})      
}

const searchEmp = async(req,res)=>{

        const data = req.query
        console.log(data);
        res.json({data:data})
}
const createEmp = async(req,res)=>{
        
        console.log(req.body);
        const savedUser = await EmpModel.insertOne(req.body)
        res.json({message:"user created",data:savedUser})
}
module.exports = {

        getEmp,searchEmp,createEmp
}

