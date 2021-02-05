"use strict";
module.exports= (req,res,next) => {
    
    if (req.body.email && emailValidator(req.body.email) === true){
        next()
    }else{
        var err = {
            etat:{
                status:400,
                message:"email non valide"
            }
        }
        res.status(err.etat.status).json(err)
    }
    
}


function emailValidator (data) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(data);
}
