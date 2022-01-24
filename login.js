const express = require('express');
const router = require('router');

const quizzo = express();

quizzo.set('port',5000);

quizzo.get('/',function(request,response){
    response.render('login.js',localhost);
});

quizzo.post('/',function(request,response){
    const body = request.body;

    var response_body = {
        username : body.username,
        password : body.password,
    };

    response.render('Welcome to Quizzo Website ! ',response_body);
});
//quizzo.listen('port',5000);
module.exports = router;