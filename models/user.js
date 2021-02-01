const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname : {
        type : String,
        default : ''
    },
    lastname : {
        type : String,
        default : ''
    },
    email : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        default : 'default_profile.png'
    },
    followers : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    following : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

User.plugin(passportLocalMongoose); 
module.exports = mongoose.model("User", User);