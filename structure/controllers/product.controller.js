const Product= require('../models/product.model');

exports.test= function (req,res){
 res.send("Hello Testing");

};

exports.productcreate= function (req, res ,next){

    let product= new Product(
        {
        name: req.body.name,
        category: req.body.category,
        rating: req.body.rating,
        price: req.body.price
        }
    )

    product.save(function(err){
        if(err){
            return next(err);
        }
        res.send("Product Added Succesfully")


    })
};

exports.productupdate= function(req,res,next){
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product){
        if (err){
            return next(err)
        }
        res.send(product)
    })
};

exports.productdetails = function(req, res, next){
    Product.findById(req.params.id, function(err, product){
        if (err) return next(err);
        res.send(product);
    })
};

exports.productdelete= function(req, res, next){
    Product.findByIdAndDelete(req.params.id, function(err, product){
        if(err) return next(err)
        res.send('Product Deleted!')
    })
};
