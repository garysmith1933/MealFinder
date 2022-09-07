import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { getCuisineRecipes } from '../store/store'
import {connect} from 'react-redux'


const CuisineResults = (props) => {
    const {results} = useLocation().state

    useEffect(() => {
       props.getCuisineRecipes(results)
    },[])

    return (
        <>
        <h1> Results for Cuisine </h1>
            {/* {cuisineRecipes.map(recipe => {
                return (
                    <div>
                        {recipe.name}
                    </div>
                )
            })} */}
        </>   
    )
}

const mapState = (state) => {
  return {cuisineRecipes: state.cuisineRecipes};
}
const mapDispatch = (dispatch) => {
  return {
    getCuisineRecipes: async(name)=> await dispatch(getCuisineRecipes(name))
  }
}
export default connect(mapState, mapDispatch)(CuisineResults);