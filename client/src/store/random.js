import axios from 'axios'

const LOAD_RANDOM = 'LOAD_RANDOM'

export const randomRecipe = (state=[], action) => {
  if (action.type === LOAD_RANDOM) {
    return action.randomRecipe;
  }
  return state;
}

export const getRandomRecipe = () => {
  return async(dispatch) => {
    const response = await axios.post('/randomRecipe')
    dispatch({type: LOAD_RANDOM, randomRecipe: response.data})
  }
}