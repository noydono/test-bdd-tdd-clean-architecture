"use strict";

const ListUsers = require("../../../core/use_cases/User/ListUsers"),
  CreateUser = require("../../../core/use_cases/User/CreateUser"),
  GetUser = require("../../../core/use_cases/User/GetUser"),
  DeleteUser = require("../../../core/use_cases/User/DeleteUser"),
  UpdatePseudoUser = require("../../../core/use_cases/User/Update/UpdatePseudoUser"),
  UpdateEmailUser = require("../../../core/use_cases/User/Update/UpdateEmailUser"),
  UpdatePasswordUser = require("../../../core/use_cases/User/Update/UpdatePasswordUser"),
  Mailer = require("../../jobs/nodemailer")
  

module.exports = {
  async createUser(req, res) {
    const user = await CreateUser(
      req.body.pseudo,
      req.body.email,
      req.body.password,
      req.body.serviceLocator
    ),
    nodeMailer = new Mailer(req.get("host"),user.email,user.pseudo)
    nodeMailer.sendEmail()
    return res.status(user.etat.status).json(user);
  },


  async getUser(req, res) {
    const user = await GetUser(req.params.id, req.body.serviceLocator);
    return res.status(user.etat.status).json(user);
  },

  async updatePseudoUser(req, res) {
    const user = await UpdatePseudoUser(
      req.params.id,
      req.body.pseudo,
      req.body.serviceLocator
    );
    return res.status(user.etat.status).json(user);
  },

  // async updateEmailUser(req, res) {
  //   const user = await UpdateEmailUser(
  //     req.params.id,
  //     req.body.email,
  //     req.body.serviceLocator
  //   );
  //   return res.status(user.etat.status).json(user);
  // },

  // async updatePasswordUser(req, res) {
  //   const user = await UpdatePasswordUser(
  //     req.params.id,
  //     req.body.password,
  //     req.body.serviceLocator
  //   );
  //   return res.status(user.etat.status).json(user);
  // },

  // async deleteUser(req, res) {},
};
