const mongoose= require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    name: {
        type : String ,   //here name is case senstive it sholud be same as the usestate in react 
        require : true,
    },
   
    email:{
        type:String,
        require:true,
        
    },
    password:{
        type : String ,
        require: true,
        },

});

const EmployeeModel = mongoose.model('employees' , EmployeeSchema) //here employees is table name whose schema is EmployeeSchema 

module.exports= EmployeeModel

