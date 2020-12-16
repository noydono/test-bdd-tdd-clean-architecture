'use strict';


module.exports = (id, { userRepository }) => {
  return userRepository.getUserById(id);
};