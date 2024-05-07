const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    provider_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ServiceProvider'
    },
    amount:{
        type:Number
    },
    status:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model('Transaction', transactionSchema);