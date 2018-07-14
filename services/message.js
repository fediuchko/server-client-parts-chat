const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  findAll: callback => {
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    MessageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  create: (message, callback) => {
    MessageRepository.create(message, (err, data) => {
      callback(err, data);
    });
  },

  update: (id, message, callback) => {
    MessageRepository.update(id, message, (err, data) => {
      callback(err, data);
    });
  },

  remove: (id, callback) => {
    MessageRepository.remove(id, (err, data) => {
      callback(err, data);
    });
  },
  findBySenderId:(id, callback )=> {
    MessageRepository.getBySenderId(id, (err, data) => {
      callback(err, data);
    });
  } ,
  findByReceiverId:(id, callback )=> {
    MessageRepository.getByReceiverId(id, (err, data) => {
      callback(err, data);
    });
  } 
};
