//require
require('dotenv').config()
const mysql=require('mysql2')
const express=require('express')
const cors =require('cors')
const db=require('./models')
const sequelize=require('sequelize')
const {Employee,Department}=require('./models')
const { Op } = require('sequelize')

//initialization
const app=express()

//middlewares
app.use(express.json())
app.use(cors())



//global functions


//Routes
app.post('/addEmployee',async(req,res)=>{
    let len
    Employee.findAll().then(data=>{
        len=data.length

        Employee.create({
            name:req.body.name,
            salary:req.body.salary,
            depid: len+1,
        }).catch(err=>{
            console.log(err)
        })
    })
    

    res.json({msg:"done"})
})

app.post('/addDepartment',(req,res)=>{

    Department.create({
        name:req.body.name,
        location:req.body.location
    }).catch(err=>{
        console.log(err)
        res.status(401).json({msg:"NO"})
    })
    res.json({msg:"done"})
})

app.post('/runQuery',async(req,res)=>{
    let max=0
    let min=99999999999999
    let element={}
    let descending=[]
    if(req.body.nameStart){
        Employee.findAll({
            where:{
                name:{
                    [Op.like]:`${req.body.nameStart}%${req.body.nameEnd}`
                }
            }
        }).then(data=>{
            data.map(ele=>{
                if(req.body.salary==='max' && ele.dataValues.salary>max){
                    max=ele.dataValues.salary
                    element=ele.dataValues
                }
                else if(req.body.salary==='min' && ele.dataValues.salary<min){
                        min=ele.dataValues.salary
                        element=ele.dataValues
                }
            })
            console.log({element})
            res.send({
                msg:'done',
                result:element
            })
        }).catch(err=>console.log(err))
        
    }else if(req.body.location){
        Employee.findAll({
            include:Department,
            order: [
                ['salary', 'DESC'],
            ],
        }).then(data=>{
            data.map(ele=>{
                if(ele.dataValues.Department && ele.dataValues.Department.dataValues.location==='surat'){
                    descending.push(ele.dataValues)
                }
            })
            res.json({msg:'done',result:descending})
        }).catch(err=>console.log(err))
    }
})


app.post('/list',(req,res)=>{
    let result={}
    Employee.findAll().then(data=>{
        result.employeeData=data
        Department.findAll().then(data=>{
            result.departmentData=data
            res.json(result)

        })
    })
    
})
//listen
db.sequelize.sync().then((res)=>{
    app.listen(8282)
})