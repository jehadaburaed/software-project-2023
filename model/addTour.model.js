const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const addTourSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    date: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    maxNumber:{
        type:Number,
        required: true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true});

const addTourModel = db.model('addTour',addTourSchema);
module.exports = addTourModel;