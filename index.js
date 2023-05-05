const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefDetails = require('./data/chefBio.json');
const foodItems = require('./data/foodItem.json');
const recipeData = require('./data/recipeData.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefBio', (req, res) => {
    res.send(chefDetails);
})

app.get('/chefBio/:id',(req,res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedChef = chefDetails.find(n => n.id === id);
    
    res.send(selectedChef)
})


app.get('/foodItems', (req, res) => {
    res.send(foodItems);
})

app.get('/recipeData', (req, res) => {
  res.send(recipeData);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})