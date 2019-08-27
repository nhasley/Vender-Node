var mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/products', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// });

// // shortcut to mongoose.connection object
// var db = mongoose.connection;

// db.on('connected', function () {
//     console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });