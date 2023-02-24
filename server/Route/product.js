const express=require("express");
const productRoute=express.Router();



productRoute.get("/",(req,res)=>{
       res.status(200).send({msg:"Product Page."})
})


productRoute.post("/create",(req,res)=>{
    res.status(200).send({msg:req.body});
})




module.exports={productRoute}