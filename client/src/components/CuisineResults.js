import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCuisineRecipes } from '../store/cuisines'
import {connect} from 'react-redux'
import {addToStorage} from "../storage.js"
import {Pagination, Grid} from "@mui/material"


const pageSize = 3;

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
      currentRecipes.map(recipe => {
      return <div className='cusine-recipes' key={recipe.id}>
                <h5 className='recipe-title'> {recipe.title} </h5>

                <div className='cuisine-body'> 
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
          <Pagination count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange} />
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