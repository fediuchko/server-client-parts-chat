const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  create: (user, callback) => {
    UserRepository.create(user, (err, data) => {
      callback(err, data);
    });
  },

  update: (id, user, callback) => {
    UserRepository.update(id, user, (err, data) => {
      callback(err, data);
    });
  },

  remove: (id, callback) => {
    UserRepository.remove(id, (err, data) => {
      callback(err, data);
    });
  } 
};
