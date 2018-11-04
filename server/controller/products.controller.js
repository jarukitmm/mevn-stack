var Product = require('../models/Product');

exports.addproduct = function(req,res){
    new_product = new Product(req.body);
<<<<<<< HEAD
    new_product.save(function(err){
        if(!err) res.json({status:'error'});
        else res.json({status:'completed',product:new_product});
    })
=======
    console.log(new_product);
    new_product.save(function(err){
        if(err) res.json({status:'error'});
        else res.json({status:'completed',product:new_product});
    })
}
exports.allproduct = function(req,res){
    Product.find({},function(err,products){
        if(err)res.json({product:''});
        else res.json({product:products});
    })
>>>>>>> 7fd13b50faec30442665dfb5dbfc04c295fef094
}