import '../Styles.css'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import PaginatedResults from './PaginatedResults'
//using paginatedResults component to list out data, but this is its own page as opposed to search and cuisine results
function SavedRecipes() {
  
const results = JSON.parse(window.localStorage.getItem("savedRecipes"))

  //remove this when done
  console.log(results)

  return (
    <>
      <Link to='/'> <button>Home</button> </Link>
      {results ? <PaginatedResults recipes={results} query={'Your saved recipes'}/> : 'You have no saved recipes'}
    </>   
  );
}

export default SavedRecipes;

//navigate to paginated results with the saved recipes, if it is there, otherwise stay here.