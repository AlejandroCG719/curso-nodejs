var mongoose = require('mongoose');
const { Schema } = mongoose;

var userSchema = new Schema({
    username:  {type: String, require: true, unique: true },
    password: {type: String, require: true },
    email:   { type: String, require: true, unique: true },
    data:{
        type: {
            age:Number,
            isMale: Boolean
        }
    },
    role: { type: String, enum:['admin', 'seller'], default: 'seller'}

});

const model = mongoose.model('User', userSchema);

module.exports = model;