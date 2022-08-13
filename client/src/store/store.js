import {configureStore} from '@reduxjs/toolkit'
import axios from 'axios'

//we need to find a way to call a function, that gets the api data from the backend and set it on the front end.

//axios needs to call api route on backend

//await axios.get('/foodData', params), then we need to update the api request with the parameters the user picked.
//so we do need to create a store for the data

const LOAD_RECIPES = 'LOAD_RECIPES'

const reducer = (state=[], action) => {
    if(action.type === LOAD_RECIPES) {
        return action.recipes
    }
}
const store = configureStore(reducer)

export const loadRecipes = (params) => {
    return async(dispatch) => {
        const response = await axios.get('/recipeResults', params)
        dispatch({type: 'LOAD_RECIPES', recipes: response.data})
    }

}

export default store

//needs to be tested but here is a general idea