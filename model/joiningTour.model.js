const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const addTourModel = require("./addTour.model");
const { Schema } = mongoose;

const joiningTourSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    tourId: {
        type: Schema.Types.ObjectId,
        ref:addTourModel.modelName
    }
},{timestamps:true});

const joiningTourModel = db.model('joiningTour',joiningTourSchema);
module.exports = joiningTourModel;