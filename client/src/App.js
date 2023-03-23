import './css/Styles.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import SavedRecipes from "./components/SavedRecipes.js";
import PaginatedResults from "./components/PaginatedResults.js";
import Navbar from "./components/Navbar.js";
import RandomResult from "./components/RandomResult.js";

const App = () => {
 return (
  <>
    <Navbar/>
    <div> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/savedRecipes' element={<SavedRecipes/>}/>
        <Route path='/searchResults' element={<PaginatedResults/>}/>
        <Route path='/randomResult' element={<RandomResult/>}/>
      </Routes>
    </div>
  </>
 );
}

export default App;
