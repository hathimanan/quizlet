const express = require('express');
const router = require('router');

const app = express();

app.get('/',function(request,response){
    response.render('/signup.js',localhost);
});

app.post('/',function(request,response){
    const body = request.body;

    var response_body = {
        username : body.username,
        password : body.password,
        name : body.name,
        confirm_password : body.confirm_password,
        email : body.email,
    };
    
    response.render('Welcome to Quizzo Website ! ',response_body);
    console.log('Welcome to Quizzo Website ! ',response_body);
    app.listen('port',5000);
});

console.log('Welcome to Quizzo Website ! ');
module.exports = router;