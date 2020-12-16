'use strict';

const UserEntitie = require('../entities/userEntitie');

module.exports = (pseudo, email, password, { userRepository }) => {
  const user = new UserEntitie(null, pseudo, email, password);
  return userRepository.addUser(user);
};