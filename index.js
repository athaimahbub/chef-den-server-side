const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// const chefDetails = require('./data/chefBio.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/chefBio', (req, res) => {
//     res.send(chefDetails);
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})