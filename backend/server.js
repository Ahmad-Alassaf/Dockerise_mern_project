const express=require("express")
const colors=require("colors");
const mongoose=require('mongoose')
const path=require('path')
const dotenv=require('dotenv').config({path:path.resolve(__dirname,'../.env')})
let collections=[]
const connectDataBase=async()=>{
    try {
      const conn=await  mongoose.connect(process.env.MONGOOSE_URI)
      console.log(`Server connected with Data Base :${conn.connection.host}`.cyan.underline)
        collections = await conn.connection.db.listCollections().toArray();
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
// Connect to Database
connectDataBase();
const app=express();
app.get('/database',(req,res)=>{
    res.send(collections.map(c => c.name));
})
app.get('/',(req,res)=>res.send(`<h1>Hello Multi stage </h1></br> NODE_ENV ${process.env.NODE_ENV}!!!</br><p>Server running on Port:${process.env.PORT}</br> </p>`))
app.listen(process.env.PORT,()=>console.log(`App running on Port: ${process.env.PORT}!!`.green.underline))