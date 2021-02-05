'use strict';

const UserEntitie = require('../../../entities/userEntitie');

module.exports = (id , password,{ Repository }) => {
  return Repository.getByIdAndUpdatePassword(id,password);
};