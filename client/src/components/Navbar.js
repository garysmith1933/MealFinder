import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <h1> Text </h1>
            <button className='saved-button' onClick={() => navigate('/savedRecipes')}>SavedRecipes</button>
        </div>
    )
}

export default Navbar;