'use strict';

const UserEntitie = require('../../entities/userEntitie');

module.exports = (pseudo, email, password, { Repository }) => {
  const user = new UserEntitie(null, pseudo, email, password);
  return Repository.add(user);
};