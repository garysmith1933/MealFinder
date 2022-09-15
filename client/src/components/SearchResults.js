import {getRecipes} from '../store/recipes'
import {connect} from 'react-redux'
import {useState,useEffect} from 'react'
import '../Styles.css'
import {useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function SearchResults({getRecipes,state}) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  const [gotRecipeResults, setGotRecipeResults] = useState(false)
 
  //remove this when done
  console.log(state)

  const searchResults = async() => {
    console.log('this is running')
    await getRecipes(query)
    setSearchQuery(query)
    setGotRecipeResults(true)
  }

  useEffect(() => {
    if (gotRecipeResults) navigate('/searchResults', {state: {recipes:state.recipes.results, query:searchQuery}})
  },[gotRecipeResults])


  return (
    <>
        <div style={{display:'flex'}}>
            <input className='landing-search' type='text' placeholder="Search" onChange={(ev) => setQuery(ev.target.value)} />
            <div className='searchIcon' onClick={() => searchResults()}><SearchIcon/></div>
        </div>
    </>
   
    
  );
}

const mapState = (state) => {
  return {state};
}
const mapDispatch = (dispatch) => {
  return {
    getRecipes: async(query)=> await dispatch(getRecipes(query))
  }
}
export default connect(mapState, mapDispatch)(SearchResults);