const express = require('express');
const route= express.Router();

const prodcont= require('../controllers/product.controller');

route.get('/test', prodcont.test);

route.get('/:id', prodcont.productdetails);

route.post('/create', prodcont.productcreate);

route.put('/:id/update', prodcont.productupdate);

route.delete('/:id', prodcont.productdelete);

module.exports= route;