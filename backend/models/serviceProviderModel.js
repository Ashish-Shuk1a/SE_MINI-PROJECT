const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceProviderSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:String
    },
    type_of_service:{
        type:String
    },
    experience:{
        type:String
    },
    rating:{
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);