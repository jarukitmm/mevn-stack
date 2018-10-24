exports.renderindex = function(req,res){
    res.render('index', { 
        title: 'Express',
        username: req.user? req.user.username:'' });
}