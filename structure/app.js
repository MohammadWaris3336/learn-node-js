const express = require('express');
const bodyparser= require('body-parser');


const product= require('./route/product.route');
const app = express();

const mongoose= require('mongoose');
let dev_db= 'mongodb+srv://mongodb:mongodb@cluster0.mkua9he.mongodb.net/test';
const mongodb = process.env.MONGODB_URI || dev_db ;
mongoose.connect(mongodb);
mongoose.Promise= global.Promise;
const db= mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/products', product)

let port= 4000;
app.listen(port, () => {

console.log("Server is running on "+ port);
})