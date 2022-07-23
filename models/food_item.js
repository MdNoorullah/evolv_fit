const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    calories:{
        type:Number,
        required:true 
    },
    protein:{
        type:Number,
        required:true 
    },
   carbs:{
    type:Number,
    required:true 
   } ,
   fat:{
    type:Number,
    required:true 
   },
   acceptedUnits:{
    type:String,
    enum:['ml','liter','kg','g','item'],
    default:'g',
    required: true
   },
   itemWeight:{
    type:Number,
    required:true
   }

})
mongoose.model("Item",itemSchema);