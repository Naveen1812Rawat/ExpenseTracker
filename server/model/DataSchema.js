const mongoose = require('mongoose');
// const { stringify } = require('querystring');

const DataSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;