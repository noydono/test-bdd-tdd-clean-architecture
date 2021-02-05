const mongoose = require('mongoose'),
 bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({

    pseudo: {
        type: String,
        unique: true, 
    },
    email: {
        type: String,
        unique: true, 
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    password: String,
    cover: {
        type:String,
        default:'/public/img/coverDefault.jpeg'
    } ,

});

// chiffrée le mot de passe
UserSchema.pre('save', function (next) {

    const user = this                                   

    bcrypt.hash(user.password, 10, (error, encrypted) => { 
        user.password = encrypted
        next()                                                
    })
})

const User = mongoose.model('User', UserSchema);

module.exports = User