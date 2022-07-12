const mongoose=require("mongoose")
const { Schema } = mongoose;
const {ObjectId}= mongoose.Schema
const ProductSchema= new Schema({
    name:{
        type:String,
        trim:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        maxlength:20,
        trim:true
    },
    category:{
        type:ObjectId,
        ref:"category"
    },
    stock:{
        type:Number
    },
    sold:{
        type:Number,
        default:0
    },
   photo:{
    data:Buffer,
    contentType:String
    }
},
{ timestamps:true}
)

module.exports=mongoose.model('product',ProductSchema)