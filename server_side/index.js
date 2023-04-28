// require modules
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
const corsMW = require("./middlewares/corsMW");
// last module to handle errors
const errorMW = require("./middlewares/errorMW");

// require dotenv
require("dotenv").config();

// require Routes
const productsRouter = require("./routes/products");
const userRouter = require("./routes/user");
const advertisementsRouter = require("./routes/advertisements");

// port
const port = process.env.PORT || 3000;

// handle uncaught exceptions (synchronous errors)
process.on("uncaughtException", (err) => {
    console.log("uncaught exception: ", err.message);
    process.exit(1);
});

// handle unhandled rejections (asynchronous errors)
process.on("unhandledRejection", (err) => {
    console.log("unhandled rejection: ", err.message);
    process.exit(1);
});


// connect to the database
mongoose.connect("mongodb://localhost:27017/ARFurniture", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to the database");
}).catch((err) => {
    console.log(err);
});


// use middlewares core
app.use(express.json())

// use middlewares third party
app.use(helmet());
app.use(corsMW);

// use routes

app.use("/api/products",productsRouter);
app.use("/api/Users",userRouter);
app.use("/api/Advertisements",advertisementsRouter);

// use custom error middleware
app.use(errorMW);


// server listen
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



