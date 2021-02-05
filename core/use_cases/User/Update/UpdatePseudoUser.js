'use strict';

const UserEntitie = require('../../../entities/userEntitie');

module.exports = (id , pseudo,{ Repository }) => {
  return Repository.getByIdAndUpdatePseudo(id,pseudo);
};