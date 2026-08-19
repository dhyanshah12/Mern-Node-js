const EmpModel = require("../models/EmpModel");

const getEmp = async(req,res)=>{
            console.log("params...",req.params);
            console.log(req.params.name);
            console.log(req.params.company);
            const emp = await EmpModel.find()
            res.json({message:"get Emp",data:emp})
            
            // res.json({message:"get user by name called...",name:req.params.name,company:req.params.company})   
            res.json({message:`${req.params.name} from ${req.params.company}`})      
}

module.exports = {

        getEmp
}

