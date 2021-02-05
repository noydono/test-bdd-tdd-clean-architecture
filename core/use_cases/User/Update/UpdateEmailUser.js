'use strict';

const UserEntitie = require('../../../entities/userEntitie');

module.exports = (id , Email,{ Repository }) => {
  return Repository.getByIdAndUpdateEmail(id,Email);
};