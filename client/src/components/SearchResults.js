import {getRecipes} from '../store/recipes'
import {connect} from 'react-redux'
import {useState} from 'react'
import '../Styles.css'
import {useNavigate} from 'react-router-dom'
import PaginatedResults from './PaginatedResults'

function SearchResults({getRecipes, results}) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  const [gotRecipeResults, setGotRecipeResults] = useState(false)
 
  //remove this when done
  console.log(results)

  const searchResults = async() => {
    console.log('this is running')
    setSearchQuery(query)
    await getRecipes(query)
    setGotRecipeResults(true)
  }

  return (
    <div className='content'>
      <div>
        <input type='text' placeholder="Search" onChange={(ev) => setQuery(ev.target.value)}/>
        <button onClick={() => searchResults()}> Submit </button> 
      </div>

      {gotRecipeResults ? <PaginatedResults recipes={results} query={searchQuery}/> : null}
    </div>
    
  );
}

const mapState = (state) => {
  const {results} = state.recipes;
  return {results};
}
const mapDispatch = (dispatch) => {
  return {
    getRecipes: async(query)=> await dispatch(getRecipes(query))
  }
}
export default connect(mapState, mapDispatch)(SearchResults);