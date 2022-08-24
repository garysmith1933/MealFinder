import {getRecipes} from './store/store.js'
import './App.css';
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'


function App({getRecipes,state}) {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState(null)

  const searchResults = () => {
    setSearchQuery(query)
    getRecipes(query)
  }

  useEffect(() => {
  //pick off from here
  if(state[0]) {
    setResults(state[0].results)
  }  
  },[state])

  const recipeInfo = results ? 
  results.length < 1 ? `No Results for ${searchQuery}` :
  results.map(recipe => {
    return <div key={recipe.id}>{recipe.title}</div>
  }) : null

  return (
    <div className="App">
        <h1>
          What do you want for dinner?
        </h1>

        <input type='text' placeholder="ex chicken" onChange={(ev) => setQuery(ev.target.value)}/>
        <button onClick={() => searchResults()}> Submit </button> 

        <div> {recipeInfo} </div>
    </div>
  );
}

const mapState = (state) => {
  return {state}
}

const mapDispatch = (dispatch) => {
  return {
    getRecipes: async(query)=> await dispatch(getRecipes(query))
  }
}
export default connect(mapState, mapDispatch)(App);
