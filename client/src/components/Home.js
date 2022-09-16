import CuisineResults from './CuisineResults'
import SearchResults from './SearchResults';
import {Link} from 'react-router-dom'

const dinner= require('../assets/dinner.jpg')

const Home = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
            <div className="home"> 
                <div className='landing-content'>
                    <h1 className='landing-title'> Wondering Whats <br/> For Dinner? </h1>
                    <p className='CTA'>Let us help you choose your next meal!</p>
                    <SearchResults/>
                </div>
                <img className='landing-image' src={dinner} alt='dinner'/>
            </div>

            <div className='random'>
                <h1 className='random-title'> Not sure what you want? Let us pick! </h1>
                <Link to='randomRecipe'> <button className='random-button'>Pick for me!</button> </Link>
            </div>

            <CuisineResults/>
        </div>
    )
}

export default Home;

