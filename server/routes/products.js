var product = require('../controller/products.controller');

module.exports = function(app){
    app.route('/product')
        .post(product.addproduct);
}