import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCuisineRecipes } from '../store/cuisines'
import {connect} from 'react-redux'
import {addToStorage} from "../storage.js"
import {Pagination, Grid,} from "@mui/material"
import SingleRecipe from './SingleRecipe'


const pageSize = 8;

const CuisineResults = ({getCuisineRecipes, cuisines}) => {
    const {cuisineName} = useLocation().state
    const [currentRecipes, setCurrentRecipes] = useState(cuisines.results)
    const [pagination, setPagination] = useState({
      count: 0,
      start: 0,
      end: pageSize
    })
    
    useEffect(() => {
      getCuisineRecipes(cuisineName)
      console.log(cuisines)
    },[])

    useEffect(() => {
      if(cuisines.results) {
        setPagination({...pagination, count:cuisines.results.length})
        setCurrentRecipes(cuisines.results.slice(pagination.start,pagination.end))
      }
    }, [cuisines, pagination.start, pagination.end])

    
    const handlePageChange = (event, page) => {
      const newStart = (page-1) * pageSize
      const newEnd = (page-1) * pageSize + pageSize
      setPagination({
        ...pagination,
        start: newStart,
        end: newEnd
      })
    }

    const recipeInfo = currentRecipes ? 
      currentRecipes.map(recipe => (
        <Grid item xs={12} sm={6} md={3} justifyContent='center'>
          <SingleRecipe title={recipe.title} url={recipe.sourceUrl} image={recipe.image}/>
        </Grid>
     
      )) : null

    return (
        <>
          <h1> {cuisineName} Cuisine </h1>
          <Grid container spacing={{xs:2, md:3}}>
            {recipeInfo}
          </Grid>
          <Pagination sx={{display: 'flex', justifyContent:'center', marginTop: '1.5rem'}}count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange} />
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