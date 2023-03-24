import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <button className='savedRecipes-button' onClick={() => navigate('/savedRecipes')}>Saved Recipes</button>
    </div>
  )
}

export default Navbar;