import axios from 'axios'

const LOAD_RECIPES = 'LOAD_RECIPES'

export const recipes= (state=[], action) => {
  if (action.type === LOAD_RECIPES) {
    return action.recipes;
  }
  return state;
}

export const getRecipes = (params) => {
  return async(dispatch) => {
    const response = await axios.post('/recipeResults', {ingredients: `${params}`})
    dispatch({type: LOAD_RECIPES, recipes: response.data})
  }
}