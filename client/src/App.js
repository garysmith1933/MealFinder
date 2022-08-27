import {getRecipes} from './store/store.js'
import {connect} from 'react-redux'
import {useState} from 'react'
import './Styles.css'

function App({getRecipes, results}) {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  
  console.log(results)

  //move to own file, create page for saved recipes
  const addToStorage = (title, url, image) => {
    const savedRecipes = JSON.parse(window.localStorage.getItem("savedRecipes"))

    if(savedRecipes) {
      savedRecipes.push({"title": title, "url": url, "image":image})
      console.log(savedRecipes)
      window.localStorage.setItem("savedRecipes",JSON.stringify(savedRecipes))
    }

    else {
      window.localStorage.setItem("savedRecipes", JSON.stringify([{"title": title, "url": url, "image":image}]))
    }
  }

  const searchResults = () => {
    setSearchQuery(query)
    getRecipes(query)
  }

  const recipeInfo = results ? 
  results.length < 1 ? `No Results for ${searchQuery}` :
  results.map(recipe => {
    return <div className='recipes' key={recipe.id}>
      <h5 className='recipe-title'> {recipe.title} </h5>
    <div className='recipe-body'> 
        <div className='button' onClick={() => addToStorage(recipe.title, recipe.sourceUrl, recipe.image)}> + </div>
          <a href={`${recipe.sourceUrl}`} target="_blank">
            <div className='recipe-image' style={{backgroundImage: `url(${recipe.image})`}}></div>
          </a>
        <div className='button'> - </div>
      </div>  
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
