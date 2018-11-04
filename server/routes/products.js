var product = require('../controller/products.controller');

module.exports = function(app){
<<<<<<< HEAD
    app.route('/product')
        .post(product.addproduct);
=======
    app.route('/api/products/allproduct')
        .get(product.allproduct);

>>>>>>> 7fd13b50faec30442665dfb5dbfc04c295fef094
}