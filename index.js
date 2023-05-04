const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefDetails = require('./data/chefBio.json');
const foodItems = require('./data/foodItem.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefBio', (req, res) => {
    res.send(chefDetails);
})
  app.get('/foodItems', (req, res) => {
    res.send(foodItems);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})