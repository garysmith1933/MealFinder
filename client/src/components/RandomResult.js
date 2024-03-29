import { useState, useEffect } from 'react';
import { getRandomRecipe, randomRecipe } from '../store/random';
import SingleRecipe from './SingleRecipe';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

const RandomResult = ({getRandomRecipe, randomRecipe}) => {
  const {currentRecipe} = useLocation().state
  const [recipe, setRecipe] = useState(currentRecipe)

  const getNewRecipe = async() => {
      await getRandomRecipe()
  }

  useEffect(() => {
    setRecipe(randomRecipe.recipes)
  },[randomRecipe.recipes])

  const recipeInfo = recipe.map(recipe => {
    return (
      <div className='random-recipe-container'>
        <SingleRecipe title={recipe.title} url={recipe.sourceUrl} image={recipe.image}/>
        <h1> Not happy with this recipe?</h1>
        <h3> Feel free to try again!</h3>
        <button className='random-recipe-button' onClick={() => getNewRecipe()}>Pick for me!</button>
      </div>
      )
    })

    return (
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}} >
        {recipeInfo}
      </div>
    )
}

const mapStateToProps = (state) => {
  const {randomRecipe} = state
  return {randomRecipe}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomRecipe: async() => await dispatch(getRandomRecipe())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomResult);