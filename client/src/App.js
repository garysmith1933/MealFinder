import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home.js"

function App({getRecipes, results}) {
 return (
  <div> 
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </div>
 );
}

export default App;
