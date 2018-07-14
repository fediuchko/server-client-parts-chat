function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.create = create;
Repository.prototype.update = update;
Repository.prototype.remove = remove;
Repository.prototype.getBySenderId = getBySenderId;
Repository.prototype.getByReceiverId = getByReceiverId;


function getAll(callback) {
  var model = this.model;
  var query = model.find();
  query.exec(callback);
}

function getBySenderId(id, callback) {
  var model = this.model;
  var query = model.find({
    senderId: id
  });
  query.exec(callback);
}
function getByReceiverId(id, callback) {
  var model = this.model;
  var query = model.find({
    receiverId: id
  });
  query.exec(callback);
}

function getById(id, callback) {
  var model = this.model;
  var query = model.findOne({
    _id: id
  });
  query.exec(callback);
}

function create(data, callback) {
  var model = this.model;
  var newModel = new model(data);
  newModel.save(callback);
}

function update(id, data, callback) {
  var model = this.model;
  model.updateOne({ _id: id }, data, callback);
}

function remove(id, callback) {
  var model = this.model;
  model.deleteOne({ _id: id }, callback);
}
 
module.exports = Repository;
