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

const express = require("express");
const { data } = require("./employee");

const app = express()


// app.get("/usertable",(req,res)=>{
//     res.set("content-type","text/html");
//     res.send(`<table border = 1>
//             <tr>
//                 <th>id</th>
//                 <th>name</th>
//                 <th>age</th>
//             </tr>
//             ${users.map(u => `
//             <tr>
//                 <td>${u.id}</td>
//                 <td>${u.name}</td>
//                 <td>${u.age}</td>
//             </tr>
//             `).join(' ')}
//         </table>
//         `)
// })

app.use(express.json())
const userRoutes = require("./src/Routes/UserRoutes")
app.use("/user",userRoutes)

const emproutes = require("./src/Routes/EmployeeRoutes")
app.use("/emp",emproutes)

const roleroutes = require("./src/Routes/RoleRoutes")
app.use("/role",roleroutes)

const getDBConnection = require("./src/utils/DBConnection")
getDBConnection()

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on Port ${PORT}`);
    
})



// app.get("/test",(req,res)=>{
//     console.log("test api called");
//     res.send("test api send")//string
// })

// app.get("/user",(req,res)=>{
//     res.json({id:1,name:"Amit"})
// })


// var users = [

//     {id:1,name:"amit",age:21},
//     {id:2,name:"raj",age:22},
//     {id:3,name:"parth",age:23},
//     {id:4,name:"akshit",age:24}   
// ]

// app.get("/users",(req,res)=>{

//         res.json({message:"data fetched succesfully",data:users})
// })



