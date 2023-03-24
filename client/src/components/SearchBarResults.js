import { getRecipes } from '../store/recipes'
import { connect } from 'react-redux'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchResults({getRecipes,state}) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  const [gotRecipeResults, setGotRecipeResults] = useState(false)
 
  const searchResults = async() => {
    await getRecipes(query)
    setSearchQuery(query)
    setGotRecipeResults(true)
  }

  useEffect(() => {
    if (gotRecipeResults) navigate('/searchResults', {state: {recipes:state.recipes.results, query:searchQuery}})
  },[gotRecipeResults])

  return (
    <>
      <div className='search'>
        <input className='search-input' type='text' placeholder="Ex: Chicken" onChange={(ev) => setQuery(ev.target.value)} />
        <button className='search-button' onClick={() => searchResults()}>Search</button>
      </div>
    </>   
  );
}

const mapState = (state) => {
  return {state};
}

const mapDispatch = (dispatch) => {
  return {
    getRecipes: async(query) => await dispatch(getRecipes(query))
  }
}

export default connect(mapState, mapDispatch)(SearchResults);