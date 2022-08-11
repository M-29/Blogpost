const mongoose=require("mongoose");

const petSchema=new mongoose.Schema({
    petname:{
        type:String,
       required: true
    
    },
    
       
        image1:{
            type: Array,
            required:true
            
        },
    breed:{
        type:String,
        required: true
    
    },
    age:{
        type: String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    description:{
        type:String,
       required: true
    
    },
    fullname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    localarea:{
        type:String,
        required: true
    
    },
    contact:{
        type: String,
        required: true
    
    },species:{
        type:String,
        required:true
    },
    states:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    todayDate:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Pet", petSchema);