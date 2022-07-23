const mongoose=require('mongoose')
const schema=mongoose.Schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    calorieRequirement:{
        type:Number,
        required:true 
    },
    mealPlan:[{
        date:Date,
        MealPlans:[{
            type: Schema.Types.ObjectId,
            ref: "Meal" 
        }],
    }]

})
mongoose.model("User",userSchema);