import { getRandomRecipe } from "../store/random";
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

const Random = ({getRandomRecipe, recipes}) => {
  const navigate = useNavigate()
  const [gotRecipeResults, setGotRecipeResults] = useState(false)

  const getRecipe = async() => {
    await getRandomRecipe()
    setGotRecipeResults(true)
  }

  useEffect(() => {
    if (gotRecipeResults) navigate('/randomResult', {state: {currentRecipe:recipes}})
  },[gotRecipeResults])

  return (
    <div className='random-container'>
      <h2 className='random-title'>Not sure what you want?</h2>
      <button className='random-button' onClick={() => getRecipe()}>Pick for me!</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { recipes } = state.randomRecipe
  return { recipes }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomRecipe: async () => await dispatch(getRandomRecipe())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);