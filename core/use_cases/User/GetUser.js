'use strict';


module.exports = (id, { Repository }) => {
  return Repository.getUserById(id);
};