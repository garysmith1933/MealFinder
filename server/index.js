var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client/build')));
app.post('/recipeResults', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apiKey = `apiKey=${process.env.REACT_APP_KEY}`;
        const api = "https://api.spoonacular.com/recipes/complexSearch?";
        const ingredients = `&query=${req.body.ingredients}`;
        const recipeInfo = '&addRecipeInformation=true';
        const sort = '&sort=random';
        //for when setting up a specific time
        // const maxReadyTime = '&maxReadyTime=40'
        const number = '&number=30';
        const url = api + apiKey + ingredients + recipeInfo + number + sort;
        const data = yield fetch(url);
        const json = yield data.json();
        res.send(json);
    }
    catch (err) {
        next(err);
    }
}));
app.post('/cuisineRecipes', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apiKey = `apiKey=${process.env.REACT_APP_KEY}`;
        const api = "https://api.spoonacular.com/recipes/complexSearch?";
        const query = `&query=''`;
        const cuisine = `&cuisine=${req.body.cuisine}`;
        const recipeInfo = '&addRecipeInformation=true';
        const number = '&number=30';
        const sort = '&sort=random';
        const url = api + apiKey + query + cuisine + recipeInfo + number + sort;
        const data = yield fetch(url);
        const json = yield data.json();
        res.send(json);
    }
    catch (err) {
        next(err);
    }
}));
app.post('/randomRecipe', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apiKey = `apiKey=${process.env.REACT_APP_KEY}`;
        const api = "https://api.spoonacular.com/recipes/random?";
        const recipeInfo = '&addRecipeInformation=true';
        const number = '&number=1';
        const url = api + apiKey + recipeInfo + number;
        const data = yield fetch(url);
        const json = yield data.json();
        res.send(json);
    }
    catch (err) {
        next(err);
    }
}));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
module.exports = app;
