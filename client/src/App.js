import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home.js"
import SavedRecipes from "./components/SavedRecipes.js";
import CuisineResults from "./components/CuisineResults.js";

function App() {
 return (
  <div> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/savedRecipes' element={<SavedRecipes/>}/>
      <Route path='cuisineResults' element={<CuisineResults/>}/>
    </Routes>
  </div>
 );
}

export default App;
