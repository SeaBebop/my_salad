const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer")
const userRoute = require("./routes/users")
const saladRoute = require("./routes/salads")
const cartRoute = require("./routes/carts")




dotenv.config()

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("db connection successfull"))
    .catch(err => {
        console.error(err)
    });

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/salads", saladRoute);
app.use("/api/carts", cartRoute);






app.listen(process.env.PORT || 8080, () => {
    console.log("back-end is running")
});