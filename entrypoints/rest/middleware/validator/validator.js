"use strict";
module.exports= (req,res,next) => {
    
    if (pseudoValidator(req.body.pseudo) === true && emailValidator(req.body.email) === true && passwordValidator(req.body.password) === true){
        next()
    }else{
        var err = {
            etat:{
                status:400,
                message:"pseudo, email ou password non valide"
            }
        }
        res.status(err.etat.status).json(err)
    }
    
}

function pseudoValidator (data) {
    const pattern = /^[a-zA-Z0-9_]{3,16}$/
    return pattern.test(data);

}
function emailValidator (data) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(data);
}
function passwordValidator (data) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return pattern.test(data);
}