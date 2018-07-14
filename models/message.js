
const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    senderId: String,
    receiverId: String,
    messages: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
