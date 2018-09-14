var express = require('express');
var router = express.Router();

var Product = require('../models/Product');

router.get('/',function(req,res){
    res.send('produts');
})

router.post('/',function(req,res){
    console.log(req.body);
    var productNew = new Product(req.body);
    productNew.save(function(err){
        if(err){
            console.error('error');
        }else{
            res.redirect('/');
        }
    })
})

module.exports = router;