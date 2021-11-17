require('module-alias/register');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('routes');


const app = express();
const PORT = process.env.PORT || 9000;

app.use('/messages', routes.message);

app.get('/', (req, res)=>{
  res.json({message: 'Hello world'});
})

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  app.listen(PORT, ()=>console.log(`Listening to port: ${PORT}`))
}).catch(err=>{
  console.log(err);
  process.exit(0);
})
