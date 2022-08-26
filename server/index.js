
require('dotenv').config();
const express = require("express");
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/recipeResults', async (req,res,next) => {
    try {
        const apiKey = `apiKey=${process.env.REACT_APP_KEY}`
        const api = "https://api.spoonacular.com/recipes/complexSearch?"
        const ingredients = `&query=${req.body.ingredients}`
        const recipeInfo = '&addRecipeInformation=true'
        const maxReadyTime = '&MaxReadyTime=20'
        const number = '&number=1'
        console.log(ingredients)
        const url = api + apiKey + ingredients + recipeInfo + maxReadyTime + number 
        const data = await fetch(url)
        const json = await data.json()
        
        res.send(json)
    } 
    
    catch (err) {
        next(err)
    }
})

app.get('/', (req,res,next) => {
    try {
        res.send('working')
    } 
    
    catch(err) {
        next(err)
    }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});