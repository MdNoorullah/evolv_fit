const mongoose=require('mongoose')
const Schema = mongoose.Schema;



const MealSchema=new mongoose.Schema({
    category:{
            type: String,
            enum: ['Breakfast',
                'Lunch',
                'EveningSnack',
                'Dinner'], 
                default:'Breakfast',
            required: true
    },
    name:{
        type:String,
        required:true
    },
    foodItems:[{
        type: Schema.Types.ObjectId,
        ref: "Item" 
    }],
    

})
mongoose.model("Meal",MealSchema);