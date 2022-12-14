import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Pagination, Grid,} from "@mui/material"
import SingleRecipe from './SingleRecipe'
import SingleSavedRecipe from './SingleSavedRecipe'

const pageSize = 8;

const PaginatedResults = (props) => {
    const {recipes, query} = useLocation().state || props
    const [currentRecipes, setCurrentRecipes] = useState(recipes)
    const [pagination, setPagination] = useState({
      count: 0,
      start: 0,
      end: pageSize
    })

    const pageTitle = query === 'Your Saved Recipes' ? query : `Results for ${query}`
  
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
        <Grid item xs={12} sm={6} md={3} key={recipe.title} justifyContent='center'>
        {query === 'Your Saved Recipes' ? <SingleSavedRecipe title={recipe.title} url={recipe.sourceUrl} image={recipe.image}/> :
          <SingleRecipe title={recipe.title} url={recipe.sourceUrl} image={recipe.image}/>}
        </Grid>
      )) : null

    return (
        <div className='results'>
          <h1>{pageTitle}</h1>
          <Grid container spacing={{xs:2, md:3}}>
            {recipeInfo}
          </Grid>
          <Pagination sx={{display: 'flex', justifyContent:'center', marginTop: '1.5rem'}}count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange} />
        </div>   
    )
}

export default PaginatedResults;