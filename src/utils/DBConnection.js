const mongoose = require("mongoose")

const getDBConnection =()=>{

    mongoose.connect("mongodb://127.0.0.1:27017/25fulldaynode").then(()=>{

        console.log("databse connected!!");
    }).catch((err)=>{

            console.log("error while connecting...",err);
    })
}

module.exports = getDBConnection