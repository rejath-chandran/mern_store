const mongoose=require("mongoose")
const { Schema } = mongoose;

const CategorySchema= new Schema({
    name:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        maxlength:22,
    },
    
},
{ timestamps:true}
)

module.exports=mongoose.model('category',CategorySchema)