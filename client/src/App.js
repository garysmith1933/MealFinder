import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home.js"
import SavedRecipes from "./components/SavedRecipes.js";

function App() {
 return (
  <div> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/savedRecipes' element={<SavedRecipes/>}/>
    </Routes>
  </div>
 );
}

export default App;
