const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const errorMiddleware = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', require('./routes/usersRoutes')); // USERs ROUTES
app.use('/user', require('./routes/userRoutes')); // USER ROUTES
app.use('/product', require('./routes/productRoutes')); // PRODUCT ROUTES

app.use(errorMiddleware);

// set > product
// get > product
// post > product
// delete > product

app.listen(port, () => console.log(`Server listening on port ${port}`));
