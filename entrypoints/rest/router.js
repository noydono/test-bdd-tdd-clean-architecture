const express = require('express'),
    router = express.Router(),
    serviceLocator = require("../../dataproviders/config/service-locator"),
    validator = require("./middleware/validator/validator"),
    pseudoValidator = require("./middleware/validator/pseudoValidator"),
    emailValidator = require("./middleware/validator/emailValidator"),
    passwordValidator = require("./middleware/validator/passwordValidator")

const userController = require("./controller/userController")


router.route("/user/create")
    .post(validator,serviceLocator ,userController.createUser)

router.route("/user/get/:id")
    .get(serviceLocator ,userController.getUser)

router.route("/user/updatePseudo/:id")
    .put(pseudoValidator,serviceLocator ,userController.updatePseudoUser)


module.exports = router