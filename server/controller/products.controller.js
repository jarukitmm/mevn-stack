var Product = require('../models/Product');

exports.addproduct = function(req,res){
    new_product = new Product(req.body);
    new_product.save(function(err){
        if(!err) res.json({status:'error'});
        else res.json({status:'completed',product:new_product});
    })
}