import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { getCuisineRecipes } from '../store/cuisines'
import {connect} from 'react-redux'
import {addToStorage} from "../storage.js"

const CuisineResults = ({getCuisineRecipes, cuisines}) => {
    const {cuisineName} = useLocation().state
    
    useEffect(() => {
      getCuisineRecipes(cuisineName)
      console.log(cuisines)
    },[])

    const recipeInfo = cuisines.results ? 
    cuisines.results.map(recipe => {
        return <div className='recipes' key={recipe.id}>
            <h5 className='recipe-title'> {recipe.title} </h5>
                <div className='recipe-body'> 
                    <div className='button' onClick={() => addToStorage(recipe.title, recipe.sourceUrl, recipe.image)}> + </div>
                    <a href={`${recipe.sourceUrl}`} target="_blank">
                        <div className='recipe-image' style={{backgroundImage: `url(${recipe.image})`}}></div>
                    </a>
                    <div className='button'> - </div>
                </div>  
        </div>
  }) : null

    return (
        <>
        <h1> {cuisineName} Cuisine </h1>
          <div>{recipeInfo}</div>
        </>   
    )
}

const mapState = (state) => {
  console.log(state)
  const {cuisines} = state;
  return {cuisines}
}
const mapDispatch = (dispatch) => {
  return {
    getCuisineRecipes: async(name)=> await dispatch(getCuisineRecipes(name))
  }
}
export default connect(mapState, mapDispatch)(CuisineResults);