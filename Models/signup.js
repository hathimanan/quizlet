const mongoose = require('mongoose');


const SignupSchema = new mongoose.Schema({
    username:   {
        type: String,
    },
    password:  {
        type: String,
    },
    name:   {
        type: String,
    },
    confirm_password:   {
        type: String,
    },
});

const tblSignup=mongoose.model('tblSignup',SignupSchema);

module.exports=tblSignup;
