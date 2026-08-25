const mongoose = require("mongoose")

const Schema = mongoose.Schema

const roleModel = new Schema({

    name:{
        type:String
    },
    status:{
        type:Boolean
    }

})

module.exports = mongoose.model("roles",roleModel)