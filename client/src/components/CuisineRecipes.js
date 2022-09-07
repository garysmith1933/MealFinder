import { useLocation } from 'react-router-dom'


const CuisineRecipes = () => {
    const location = useLocation()

    return (
        <>
        <h1> Results for Cuisine </h1>
            {/* {cuisineResult.map(recipe => {
                return (
                    <div>
                        {recipe.name}
                    </div>
                )
            })} */}
        </>   
    )
}

export default CuisineRecipes;