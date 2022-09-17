import { useState, useEffect } from 'react';
import { getRandomRecipe, randomRecipe } from '../store/random';
import SingleRecipe from './SingleRecipe';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

const RandomResult = ({getRandomRecipe, randomRecipe}) => {
    const {currentRecipe} = useLocation().state
    const [recipe, setRecipe] = useState(currentRecipe)
    console.log(currentRecipe)
    const getNewRecipe = async() => {
        await getRandomRecipe()
    }

    useEffect(() => {
        setRecipe(randomRecipe.recipes)
    },[randomRecipe.recipes])

    const recipeInfo = recipe.map(recipe => {
        return (
            <div className='randomRecipe'>
                <SingleRecipe title={recipe.title} url={recipe.sourceUrl} image={recipe.image}/>
                <h1 style={{marginBottom: '0.5rem'}}> Not happy with this recipe?</h1>
                <h2 style={{color:'white', marginTop:'0'}}>Feel free to try again!</h2>
                <button className='random-button' onClick={() => getNewRecipe()}>Pick for me!</button>
            </div>
        )
    })

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}} >
            {recipeInfo}
        </div>
    )
}


const mapStateToProps = (state) => {
    const {randomRecipe} = state
    return {randomRecipe}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRandomRecipe: async() => await dispatch(getRandomRecipe())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomResult);