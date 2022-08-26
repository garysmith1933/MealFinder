import {getRecipes} from './store/store.js'
import {connect} from 'react-redux'
import {useState} from 'react'
import './Styles.css'

function App({getRecipes, results}) {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  
  console.log(results)

  const searchResults = () => {
    setSearchQuery(query)
    getRecipes(query)
  }

  const recipeInfo = results ? 
  results.length < 1 ? `No Results for ${searchQuery}` :
  results.map(recipe => {
    return <div className='recipes' key={recipe.id}>{recipe.title}
    <a href={`${recipe.sourceUrl}`} target="_blank">
    <div className='recipe-image' style={{backgroundImage: `url(${recipe.image})`}}></div>
    </a>
    
    </div>
  }) : null

  return (
    <div className='content'>
      
          <h1 className='title'>
            Whats for dinner?
          </h1>
     
      <div>
        <input type='text' placeholder="ex chicken" onChange={(ev) => setQuery(ev.target.value)}/>
        <button onClick={() => searchResults()}> Submit </button> 
       </div>


        <div> {recipeInfo} </div>
    </div>
  );
}

const mapState = (state) => {
  const {results} = state;
  return {results};
}
const mapDispatch = (dispatch) => {
  return {
    getRecipes: async(query)=> await dispatch(getRecipes(query))
  }
}
export default connect(mapState, mapDispatch)(App);
