import '../Styles.css'
import { Link } from 'react-router-dom'

function SavedRecipes() {
const results = JSON.parse(window.localStorage.getItem("savedRecipes"))

  //remove this when done
  console.log(results)

  const recipeInfo = results ? 
    results.map(recipe => {
        return <div className='recipes' key={recipe.title}>
            <h5 className='recipe-title'> {recipe.title} </h5>
                    <a href={`${recipe.url}`} target="_blank">
                        <div className='recipe-image' style={{backgroundImage: `url(${recipe.image})`}}></div>
                    </a>
        </div>
  }) : 'You have no saved recipes'

  return (
    <>
      <Link to='/'> <button>Home</button> </Link>
      <div className='recipes'> {recipeInfo} </div>
    </>
    
  );
}

export default SavedRecipes;