import { useNavigate } from "react-router-dom"

export const Homebar = () => {
  const navigate = useNavigate()
  return (
    <div className="Homebar">
      <h1 className="back-to-home" onClick={() => navigate('/')}>MealFinder</h1>
      <button className='savedRecipes-button saved' onClick={() => navigate('/savedRecipes')}>Saved Recipes</button>
    </div>
  )
}