const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const saladRoute = require('./routes/salads');
const cartRoute = require('./routes/carts');
const orderRoute = require('./routes/orders');
const path = require('path');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('db connection successfull'))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(cors());

app.use('/api/images', express.static(path.join(__dirname, 'uploads', 'images')));

app.use('/api/users', userRoute);
app.use('/api/salads', saladRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log('back-end is running');
});
