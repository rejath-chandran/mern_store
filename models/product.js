const mongoose=require("mongoose")
const { Schema } = mongoose;

const ProductSchema= new Schema({
    name:{
        type:String,
        trim:true,
        unique:true
    },
  
},
{ timestamps:true}
)

module.exports=mongoose.model('product',ProductSchema)