import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <h1 onClick={() => navigate('/')} style={{marginLeft:'1rem'}} className='main-title'> MealFinder </h1>
      <button className='savedRecipes-button button' onClick={() => navigate('/savedRecipes')}>Saved Recipes</button>
    </div>
  )
}

export default Navbar;