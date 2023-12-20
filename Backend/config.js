let mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce');
} catch (error) {
    console.log(error);
}