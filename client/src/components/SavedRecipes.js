import '../Styles.css'
import PaginatedResults from './PaginatedResults'

function SavedRecipes() {
let results = JSON.parse(window.localStorage.getItem("savedRecipes")) 

  return (
    <>
      {!results || results.length > 0 ? 
       <div className='results' style={{display:'flex', justifyContent:'center'}}> 
        <h1>You have no saved recipes</h1>
      </div> :
      
      <PaginatedResults recipes={results} query={'Your Saved Recipes'}/>}
    </>   
  );
}

export default SavedRecipes;