"use strict";
module.exports= (req,res,next) => {
    console.log(req.body);
    if ( req.body.pseudo && pseudoValidator(req.body.pseudo.trim()) === true){
        next()
    }else{
        var err = {
            etat:{
                status:400,
                message:"pseudo  non valide"
            }
        }
        res.status(err.etat.status).json(err)
    }
    
}

function pseudoValidator (data) {
    const pattern = /^[a-zA-Z0-9_]{3,16}$/
    return pattern.test(data);

}