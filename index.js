const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname,'client/build')))

app.use('/api',(req,res)=>{

  res.send({success:true});
});

app.listen(PORT,(req,res)=>{
  console.log("Listening on: "+PORT);
});



