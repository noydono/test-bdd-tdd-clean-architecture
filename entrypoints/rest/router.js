const express = require('express'),
    router = express.Router()

const recetteController = require("./controller/recetteController"),
      userController = require("./controller/userController")


router.route("/recette/test")
    .get(recetteController.test)

router.route("/user/test")
    .get(userController.test)


module.exports = router