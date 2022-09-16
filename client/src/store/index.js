import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import { cuisines } from './cuisines.js';
import { recipes } from './recipes.js';
import {randomRecipe} from './random.js'

const reducer = combineReducers({cuisines, recipes, randomRecipe})
export const store = createStore(reducer, applyMiddleware(thunk))



