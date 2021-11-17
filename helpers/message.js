const models = require('models');

const insertMessage = async (newMessage) => {
  try {
    const message = new models.Message(newMessage);
    return await message.save();
  } catch(error){
    console.error(`Error: ${error}`);
    throw error;
  }
}

module.exports = {
  insertMessage
}