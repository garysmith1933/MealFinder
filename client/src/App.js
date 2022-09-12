import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home.js"
import SavedRecipes from "./components/SavedRecipes.js";
import PaginatedResults from "./components/PaginatedResults.js";

function App() {
 return (
  <div> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/savedRecipes' element={<SavedRecipes/>}/>
      <Route path='/searchResults' element={<PaginatedResults/>}/>
    </Routes>
  </div>
 );
}

export default App;
