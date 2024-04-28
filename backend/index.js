const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const saladRoute = require('./routes/salads');
const cartRoute = require('./routes/carts');
const orderRoute = require('./routes/orders');
const Salad = require('./models/Salad')
const path = require('path');

dotenv.config();

// Connect to MongoDB
console.log(process.env.MONGO_URL)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('db connection successfull'))

  const jsonData = fs.readFileSync(path.join(__dirname,'my_salad.salads.json'), 'utf8');
  const salads = JSON.parse(jsonData);

// Insert salads into MongoDB automatically
Salad.insertMany(salads)
  .catch((err) => {
    console.error(err);
  });
  const listOrigin =  process.env.REACT_APP_FRONTEND && process.env.REACT_APP_BACKEND ? [process.env.REACT_APP_FRONTEND,process.env.REACT_APP_BACKEND] : '*'
  //For development only
  app.use(cors({
    origin: listOrigin, // Allow requests from all origins
    // Other cors options if needed
  }));
  
// CORS Configuration
/*
const corsOptions = {
  origin: process.env.FRONTEND_ORIGIN ||  , // Change '*' to your frontend URL in production
  methods: ['GET', 'POST'], // Allow only specified HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
};
*/
// Middleware
app.use(express.json());
//app.use(cors(corsOptions)); // Apply CORS with options

// Static files
app.use('/api/images', express.static(path.join(__dirname, 'uploads', 'images')));

// Routes
app.use('/api/users', userRoute);
app.use('/api/salads', saladRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

//app.options('*', cors(corsOptions));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});