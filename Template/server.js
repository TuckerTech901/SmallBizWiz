//console.log('May Node be with You')

const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })

//   app.get('/', function(req, res) {
//     res.send('Hello World')
//   })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
  })