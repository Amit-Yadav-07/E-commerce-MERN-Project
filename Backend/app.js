const  Razorpay = require('razorpay');
let express = require('express');
let mongoose = require('mongoose');
let app = express();
require('./config');
let env = require('dotenv').config();
let cors = require('cors');
let authRoute = require('./Route/auth_routes.js');
let productRoute = require('./Route/product_routes.js');
let cartRoute = require('./Route/cart_routes');
let paymentRoutes = require('./Route/payment_routes');


let PORT = 5000;





app.use(express.json());
app.use(cors());




app.use('/api/v1/auth',authRoute);
app.use('/api/v1/products',productRoute);
app.use('/api/v1/cart',cartRoute);
app.use('/api/v1/payment',paymentRoutes);




app.listen(PORT, () => {
    console.log(`app is running on PORT no ${PORT}`);
});