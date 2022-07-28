
const express = require('express')
const mongoose  = require('mongoose')

const Item=mongoose.model("Item")
const router=express.Router()
router.post('/additem',async(req,res)=>{
    const {name,calories,protein,carbs,fat,itemWeight}=req.body
    
    const item=new Item({
      name,
      calories,
      protein,
      carbs,
      fat,
      itemWeight
    })
    await item.save()
    .then(item=>{
        res.json({message:"saved successfully"})
    })
    .catch(err=>{
        console.log(err);
    })
})


module.exports=router