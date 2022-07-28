const express = require("express");
const router = express.Router();
const mongoose  = require('mongoose')
const Item=mongoose.model("Item")
const Meal=mongoose.model("Meal")



router.post("/meal", async (req, res) => {
  
  const { name, category, fooditems } = req.body;
  let data = await Item.find({ name: fooditems });

  const meal = new Meal({
    name,
    category,
    fooditems: data,
  });
  await meal.save()
    .then(meal=>{
        res.json({message:"saved successfully"})
    })
    .catch(err=>{
        console.log(err);
    })
})




module.exports = router;