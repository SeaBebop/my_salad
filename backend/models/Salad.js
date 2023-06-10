const mongoose = require("mongoose");

const saladSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String, 
        required: true,
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'protein'],
        required: true,
    },
});

module.exports = mongoose.model("Salad", saladSchema);
 