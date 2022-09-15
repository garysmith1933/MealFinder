import CuisineResults from './CuisineResults'
import SearchResults from './SearchResults';
const dinner= require('../assets/dinner.jpg')

export const TempHome = () => {
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
                <button className='random-button'>Pick for me!</button>
            </div>

            <CuisineResults/>
        </div>
    )
}