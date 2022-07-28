const express = require("express");
const router = express.Router();
const mongoose  = require('mongoose')
 const Meal=mongoose.model("Meal");
const User = mongoose.model("User");

router.post("/add_user", async (req, res) => {
  
  const {name, calorieRequirement,mealPlan} = req.body;
    let data = await Meal.find({ name: mealPlan });
  console.log(data);
  const user = new User({
    name ,
    calorieRequirement,
    mealPlan : data
  })
  await user.save()
  .then(user=>{
    res.json({message:"User details saved successfully"})
})
.catch(err=>{
    console.log(err);
})
})

module.exports = router;