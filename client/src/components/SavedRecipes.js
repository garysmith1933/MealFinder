import '../Styles.css'
import PaginatedResults from './PaginatedResults'

function SavedRecipes() {
const results = JSON.parse(window.localStorage.getItem("savedRecipes"))

  return (
    <>
      {results ? <PaginatedResults recipes={results} query={'Your Saved Recipes'}/> : 'You have no saved recipes'}
    </>   
  );
}

export default SavedRecipes;