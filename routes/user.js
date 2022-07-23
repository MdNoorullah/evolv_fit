
const express = require('express')
const mongoose  = require('mongoose')

const Item=mongoose.model("Item")
const router=express.Router()

router.post('/additem',(req,res)=>{
    const {name,calories,protein,carbs,fat}=req.body
    const item=new Item({
      name,
      calories,
      protein,
      carbs,
      fat
    })
    item.save()
    .then(post=>{
        res.json({message:"saved successfully"})
    })
    .catch(err=>{
        console.log(err);
    })
})