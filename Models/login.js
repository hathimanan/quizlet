const mongoose = require('mongoose');


const LoginSchema = new mongoose.Schema({
    username:   {
        type: String,
    },
    password:  {
        type: String,
    }
});

const tblLogin=mongoose.model('tblLogin',LoginSchema);

module.exports=tblLogin;
