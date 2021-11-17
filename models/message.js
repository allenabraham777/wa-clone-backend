const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;