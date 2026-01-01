const express=require("express")
const colors=require("colors");

const port =process.env.PORT||4000
const app=express();
app.get('/',(req,res)=>res.send(`<h1>Hello!</></br><p>Server running on Port:${port}</br> NODE_ENV ${process.env.NODE_ENV}</p>`))
app.listen(port,()=>console.log(`App running on Port: ${port}`.green.underline))