"use strict";
module.exports= (req,res,next) => {
    
    if (req.body.password && passwordValidator(req.body.password.trim()) === true){
        next()
    }else{
        var err = {
            etat:{
                status:400,
                message:"password non valide"
            }
        }
        res.status(err.etat.status).json(err)
    }
    
}
function passwordValidator (data) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return pattern.test(data);
}