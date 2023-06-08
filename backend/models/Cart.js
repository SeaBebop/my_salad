const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    salads: [
      {
        saladId: {
          type: String,
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
  },
  { timestamps: true }
);

cartSchema.pre('save', async function (next) {
  let total = 0;
  for (const salad of this.salads) {
    const saladDoc = await mongoose.model('Salad').findById(salad.saladId);
    if (saladDoc) {
      total += saladDoc.price * salad.quantity;
    }
  }
  this.total = total;
  next();
});

module.exports = mongoose.model('Cart', cartSchema);
