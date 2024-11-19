const express= require("express")
const cors = require("cors")
const mongoose =require("mongoose")
const EmployeeModel = require('./model/Employee')
const bcrypt =require("bcrypt")

const app= express()
app.use(express.json())   //it will get the data in json fromat fron the frontend
app.use(cors())

app.post('/login',(req,res)=>{
const {email , password}= req.body;
EmployeeModel.findOne({email : email})
.then(user => {
    if(user){
          bcrypt.compare(password ,user.password , (err, response)=>{
           
               if(response){
                res.json("success")
              }
              else {
                res.json("Password is incorrect")
               }
          })
        }
        else
        res.json("NO record exist..")
        
})

})

app.post('/', (req,res)=>{
    const {name , email, password} = req.body;
    bcrypt.hash(password , 10)
    .then(hash=>{
        EmployeeModel.create({name , email, password: hash})
        .then(employees => res.json(employees))
        .catch(err=> res.json(err))
    })
    .catch(err=> res.json(err.message))
})

mongoose.connect('mongodb://127.0.0.1:27017/employee')  //localhost=127.0.0.1
app.listen(3001,
    ()=>console.log("server is running...")
)
