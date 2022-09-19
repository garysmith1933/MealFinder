import '../Styles.css'
import PaginatedResults from './PaginatedResults'

function SavedRecipes() {
let results = JSON.parse(window.localStorage.getItem("savedRecipes")) 

  return (
    <>
      {results.length > 0 ? <PaginatedResults recipes={results} query={'Your Saved Recipes'}/> : 
      
      <div className='results' style={{display:'flex', justifyContent:'center'}}> 
        <h1>You have no saved recipes</h1>
      </div>}
    </>   
  );
}

export default SavedRecipes;