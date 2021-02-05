module.exports = class {

    constructor(id , pseudo, email , password,etat = null) {
      this.id = id
      this.pseudo = pseudo;
      this.email = email;
      this.password = password;
      this.etat = etat
    }
  
  };