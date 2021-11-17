const helpers = require('helpers');

const postMessage = async (req, res) => {
  try {
    const message = req.body;
    await helpers.message.insertMessage(message);
    res.status(201).json({success: true})
  } catch(error){
    console.error(`Error: ${error}`);
    res.status(500).json({error: true})
  }
}

module.exports = {
  postMessage
}