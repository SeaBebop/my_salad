const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    salads: [
        {
          saladId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Salad",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    total: {
        type: Number,
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

orderSchema.pre("save", async function (next) {
    let total = 0;
    for (const salad of this.salads) {
      const saladDoc = await mongoose.model("Salad").findById(salad.saladId);
      if (saladDoc) {
        total += saladDoc.price * salad.quantity;
      }
    }
    this.total = total;
    next();
  });
  

module.exports = mongoose.model("Order", orderSchema);