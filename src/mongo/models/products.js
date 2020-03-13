var mongoose = require('mongoose');
const { Schema } = mongoose;

var productSchema = new Schema({
    titulo:  {type: String, require: true },
    description: {type: String, require: true },
    price:   { type: Number, require: true },
    images: { type : [{ type: String, require: true}], default:[] },
    user:{ type:mongoose.Schema.Types.ObjectId, ref:'User' ,require: true }
    },
    {
        timestamps: true
    }
    );

const model = mongoose.model('product', productSchema);

module.exports = model;
