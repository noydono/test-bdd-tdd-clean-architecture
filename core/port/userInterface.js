"use strict";

module.exports = class {
  constructor() {}

  add() {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  getUserById() {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
  getByIdAndUpdatePseudo() {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  getUsers() {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
};
