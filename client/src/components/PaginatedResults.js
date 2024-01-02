import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Pagination, Grid } from "@mui/material"
import SingleRecipe from './SingleRecipe'

const pageSize = 8;

const PaginatedResults = (props) => {
  const {recipes, query} = useLocation().state || props
  const [currentRecipes, setCurrentRecipes] = useState(recipes)
  const [pagination, setPagination] = useState({
    count: 0,
    start: 0,
    end: pageSize
  })

  const getPageTitle = () => {
    if (query === 'Your Saved Recipes') return query
    return `Results for ${query} Cuisine`
  }

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
      <Grid item xs={12} sm={6} md={4} lg={3} align='center' key={recipe.title} justifyContent='center'>
        <SingleRecipe title={recipe.title} url={recipe.sourceUrl} image={recipe.image} isSavedRecipe={props.isSavedRecipe}/>
      </Grid>
      )) : null

  return (
    <>
      <div className='results-container'>
        <h1 className='cuisine-title' style={{marginBottom: '1.5rem'}}>{getPageTitle()}</h1>

        <Grid container justify="center" spacing={{xs:2, md:3}}>
          {recipeInfo}
        </Grid>

        <Pagination sx={{display: 'flex', justifyContent:'center', marginTop: '1.5rem'}}count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange} />
      </div>   
    </>
    )
}

export default PaginatedResults;
