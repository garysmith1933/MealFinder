import '../Styles.css'
import PaginatedResults from './PaginatedResults'

function SavedRecipes() {
let results = JSON.parse(window.localStorage.getItem("savedRecipes")) 

  return (
    <>
      {results ? <PaginatedResults recipes={results} query={'Your Saved Recipes'}/> : 
      
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}> 
        <h1>You have no saved recipes</h1>
      </div>}
    </>   
  );
}

export default SavedRecipes;