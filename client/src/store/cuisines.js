import axios from 'axios'

const LOAD_CUISINES = 'LOAD_CUISINES'

export const cuisines = (state=[], action) => {
    if(action.type === LOAD_CUISINES) {
        return action.cuisineRecipes;
    }
    return state;
}

export const getCuisineRecipes = (cuisineName) => {
    return async(dispatch) => {
        const response = await axios.post('/cuisineRecipes', {cuisine: `${cuisineName}`})
        dispatch({type: LOAD_CUISINES, cuisineRecipes: response.data })
    }
}
