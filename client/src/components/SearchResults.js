import {getRecipes} from '../store/recipes'
import {connect} from 'react-redux'
import {useState} from 'react'
import '../Styles.css'
import {addToStorage} from "../storage.js"

function SearchResults({getRecipes, results}) {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  let gotRecipeResults = false;

  //remove this when done
  console.log(results)

  const searchResults = () => {
    setSearchQuery(query)
    getRecipes(query)
    gotRecipeResults = true;
  }

  const recipeInfo = results ? 
    results.length < 1 && gotRecipeResults === true ? `No Results for ${searchQuery}` :
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
      <div>
        <input type='text' placeholder="ex chicken" onChange={(ev) => setQuery(ev.target.value)}/>
        <button onClick={() => searchResults()}> Submit </button> 
      </div>

      <div> {recipeInfo} </div>
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