import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import SavedRecipes from "./components/SavedRecipes.js";
import PaginatedResults from "./components/PaginatedResults.js";
import Random from "./components/RandomRecipe.js";
import Navbar from "./components/Navbar.js";

function App() {
 return (
  <>
    <Navbar/>
    <div> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/savedRecipes' element={<SavedRecipes/>}/>
        <Route path='/searchResults' element={<PaginatedResults/>}/>
        <Route path='/randomRecipe' element={<Random/>}/>
      </Routes>
    </div>
  </>
  
 );
}

export default App;
