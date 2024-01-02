if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

import express, { Application, Request, Response, NextFunction }  from 'express'
import fetch from 'node-fetch';
import path from 'path'

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client/build')));

app.post('/recipeResults', async (req: Request,res: Response, next: NextFunction) => {
    try {
        const apiKey = `apiKey=${process.env.REACT_APP_KEY}`
        const api = "https://api.spoonacular.com/recipes/complexSearch?"
        const ingredients = `&query=${req.body.ingredients}`
        const recipeInfo = '&addRecipeInformation=true'
        const sort = '&sort=random'
        // const maxReadyTime = '&maxReadyTime=40' # will add this as a feature soon.
        const number = '&number=30'
        const url = api + apiKey + ingredients + recipeInfo  + number + sort 
        const data = await fetch(url)
        const json = await data.json()
        res.send(json)
    } 
    
    catch (err) {
        next(err)
    }
})

app.post('/cuisineRecipes', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apiKey = `apiKey=${process.env.REACT_APP_KEY}`
        const api = "https://api.spoonacular.com/recipes/complexSearch?"
        const query = `&query=''`
        const cuisine = `&cuisine=${req.body.cuisine}`
        const recipeInfo = '&addRecipeInformation=true'
        const number = '&number=30'
        const sort = '&sort=random'
        const url = api + apiKey + query + cuisine + recipeInfo  + number + sort
        const data = await fetch(url)
        const json = await data.json()
        res.send(json)
    } 
    
    catch (err) {
        next(err)
    }
})

app.post('/randomRecipe', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apiKey = `apiKey=${process.env.REACT_APP_KEY}`
        const api = "https://api.spoonacular.com/recipes/random?"
        const recipeInfo = '&addRecipeInformation=true'
        const number = '&number=1'
        const url = api + apiKey + recipeInfo  + number 
        const data = await fetch(url)
        const json = await data.json()
        res.send(json)
    } 
    
    catch (err) {
        next(err)
    }
})

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
});

const PORT: string | number = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  
module.exports = app;