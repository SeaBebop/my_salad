const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    salads: [{
        saladId: {
            type: String,
            quantity: {
                type: Number,
                default: 1,
            }
        }
    }],
    ammount: {
        type: Number,
        required: true,
    },
    address: {
        type: Object, required: true,
    },
    status: {
        type: String,
        default: "pending",
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);