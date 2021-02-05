const UserEntitie = require("../../../../core/entities/userEntitie"),
 userInterface = require("../../../../core/port/userInterface"),
 MongooseUser = require("../../odm/mongoose/schema/user")
module.exports = class extends userInterface {
  constructor() {
    super();
  }

  async add(userEntitie) {
    const { pseudo, email, password } = userEntitie;
    let mongooseUser;
    try {
      mongooseUser = new MongooseUser({ pseudo, email, password },(err,user)=>{
        if(!err){
          return user
        }
      });
      await mongooseUser.save();
      return new UserEntitie(
        mongooseUser._id,
        mongooseUser.pseudo,
        mongooseUser.email,
        mongooseUser.password,
        {
          status: 201,
          message: "sucess",
        }
      );
    } catch (exception) {
      return new UserEntitie(
        mongooseUser._id,
        mongooseUser.pseudo,
        mongooseUser.email,
        mongooseUser.password, 
        {
          status: 400,
          message: "pseudo email deja utiliser",
          error: exception,
        }
      );
    }
  }

  async getUserById(id) {

    try {
    const mongooseUser = await MongooseUser.findById(id,(err,user)=>{
      if(!err){
        return user
      }
    })
    return new UserEntitie(
      mongooseUser._id,
      mongooseUser.pseudo,
      mongooseUser.email,
      null,
      {
        status: 200,
        message: "sucess",
      }
    );
      
    } catch (exception) {
      console.log(exception);
      return new UserEntitie(
        null,null,null,null,
        {
          status: 400,
          message: "utilisateur introuvable",
          error: exception,
        }
      );
      
    }
  }

  async getByIdAndUpdatePseudo(id,pseudo) {

    try {
      const mongooseUser = await MongooseUser.findByIdAndUpdate(id,{
        pseudo : pseudo,
      },(err,user)=>{
        if(!err){
          return user
        }
      })
      return new UserEntitie(
        mongooseUser._id,
        mongooseUser.pseudo,
        mongooseUser.email,
        null,
        {
          status: 200,
          message: "sucess",
        }
      );
        
      } catch (exception) {
        console.log(exception);
        return new UserEntitie(
          null,null,null,null,
          {
            status: 400,
            message: "utilisateur introuvable",
            error: exception,
          }
        );
        
      }
    
  }

  async getByIdAndUpdateEmail(id,email) {

    try {
      const mongooseUser = await MongooseUser.findByIdAndUpdate(id,{
        pseudo : pseudo,
      })
      return new UserEntitie(
        mongooseUser.id,
        mongooseUser.pseudo,
        mongooseUser.email,
        null,
        {
          status: 200,
          message: "sucess",
        }
      );
        
      } catch (exception) {
        console.log(exception);
        return new UserEntitie(
          null,null,null,null,
          {
            status: 400,
            message: "utilisateur introuvable",
            error: exception,
          }
        );
        
      }
    
  }

  async getByIdAndUpdatePassword(id,password) {

  }
};
