const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id :{type:Number,unique:true,index:true},
    name : String,
    quantity : Number,
    cost : Number,
    category : String,
    image : String,
    type : {type:[String]},
    description : String
},{_id:false})

module.exports = mongoose.model('Product',ProductSchema);