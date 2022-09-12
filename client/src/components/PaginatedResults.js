import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Pagination, Grid,} from "@mui/material"
import SingleRecipe from './SingleRecipe'
import {Link} from 'react-router-dom'


const pageSize = 8;

const PaginatedResults = ({recipes, query}) => {
    const [currentRecipes, setCurrentRecipes] = useState(recipes)
    console.log(currentRecipes)
    const [pagination, setPagination] = useState({
      count: 0,
      start: 0,
      end: pageSize
    })
    
  
    useEffect(() => {
        setPagination({...pagination, count:recipes.length})
        setCurrentRecipes(recipes.slice(pagination.start,pagination.end))
    }, [recipes, pagination.start, pagination.end])

    
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
        <Link to='/'><button> Back </button></Link>
          <h1>Results for {query}</h1>
          <Grid container spacing={{xs:2, md:3}}>
            {recipeInfo}
          </Grid>
          <Pagination sx={{display: 'flex', justifyContent:'center', marginTop: '1.5rem'}}count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange} />
        </>   
    )
}

export default PaginatedResults;