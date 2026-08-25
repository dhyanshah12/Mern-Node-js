const mongoose = require("mongoose")

const Schema = mongoose.Schema

const empModel = new Schema({

       name:{
            type:String
       },
       salary:{
            type:Number
       },
       email:{
        type:String
       } 
})

module.exports = mongoose.model("emp",empModel)