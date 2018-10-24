var index = require('../controller/index.controller');

/* GET home page. */
module.exports = function(app){
 app.route('/')
    .get(index.renderindex);
};
