const mongoose = require("mongoose"),
dotenv = require("dotenv");
dotenv.config()

module.exports = {
  
  init: () => {
  mongoose.connect(process.env.DATABASE_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

}, (err) => {

    if (err) {

        console.log('attention erreur de connexion' + err);
        res.json(err)

    } else {

        console.log('ATTENTION connecté à mongo cloud!');

    }

});
}

}
