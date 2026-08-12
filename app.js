// console.log("Hello");
// var x = 100
// console.log("value of x = ",x);
// console.log("app.js");
// require ("./user");

// console.log("user = ",user);
// console.log(user.userName);
// console.log(user.userAge)

// console.log("employees =",employees)
// var greet = employees.setUser(12,"raj")
// console.log(greet)

const express = require("express")

const app = express()

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server starteed on Port ${PORT}`);
    
})


app.get("/test",(req,res)=>{
    console.log("test api called");
    res.send("test api send")//string
})

app.get("/user",(req,res)=>{
    res.json({id:1,name:"Amit"})
})