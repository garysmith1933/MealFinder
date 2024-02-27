import Slider from "react-slick";
import Cuisines from '../utils/cuisines.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getCuisineRecipes } from '../store/cuisines'
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const CuisineResults = ({getCuisineRecipes, state}) => {
  const navigate = useNavigate()
  const [cuisine, setCuisine] = useState('')
  const [gotRecipeResults, setGotRecipeResults] = useState(false)
 
  const getResults = async(name) => {
    setCuisine(name)
    await getCuisineRecipes(name)
    setGotRecipeResults(true)
  }

  useEffect(() => {
    if (gotRecipeResults) navigate('/searchResults', {state: {recipes:state.cuisines.results, query:cuisine}})
  },[gotRecipeResults])

  return (
    <div className="main-cuisine-container">
      <h1 className='cuisine-title'>Cuisines</h1>
      <h3 className='cuisine-sub-title'>Check out our collection of recipes to make your search a bit easier.</h3>
      <div className='cuisine-container'>
          {Cuisines.map(cuisine => {
            return (
              <div className='single-cuisine-container' key={cuisine.id}>
                <img className='cuisine-image' onClick={() => getResults(cuisine.name)} src={cuisine.image} alt={cuisine.name}/>  
                <h2 className="cuisine-name" onClick={() => getResults(cuisine.name)}>{cuisine.name}</h2>
                <p className='cuisine-description'>{cuisine.description}</p>
              </div> 
            )    
          })}
      </div>   
    </div>    
    )
}

const mapState = (state) => {
  return {state}
}

const mapDispatch = (dispatch) => {
  return {
    getCuisineRecipes: async (name) => await dispatch(getCuisineRecipes(name))
  }
}

export default connect(mapState, mapDispatch)(CuisineResults);