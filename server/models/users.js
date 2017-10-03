/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    username: {
        type: String
    },
    password: {
        type: String
    }

}, { collection: 'user' });
module.exports = mongoose.model('User', userSchema);