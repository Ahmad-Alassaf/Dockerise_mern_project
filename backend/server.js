const express=require("express")
const colors=require("colors");
const path=require('path')
const dotenv=require('dotenv').config({path:path.resolve(__dirname,'../.env')})
const app=express();
app.get('/',(req,res)=>res.send(`<h1>Hello</h1></br> NODE_ENV ${process.env.NODE_ENV}!!!</br><p>Server running on Port:${process.env.PORT}</br> </p>`))
app.listen(process.env.PORT,()=>console.log(`App running on Port: ${process.env.PORT}!!`.green.underline))