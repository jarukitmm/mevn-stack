var product = require('../controller/products.controller');

module.exports = function(app){
    app.route('/api/products/allproduct')
        .get(product.allproduct);
<<<<<<< HEAD

=======
>>>>>>> d8c26972425cecb04bb051be8500e6102fb24771
}