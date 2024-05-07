const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    serviceProviderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ServiceProvider'
    },
    status:{
        type:String
    },
    description:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model('Service',serviceSchema)