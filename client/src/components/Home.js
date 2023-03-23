import CuisineResults from './CuisineResults'
import SearchBarResults from './SearchBarResults';
import RandomRecipe from './RandomRecipe';

const dinner= require('../assets/dinner.jpg')

const Home = () => {
  return (
    <div className='main'>
      <div className='home'> 

        <div className='landing-content'>
          <h1 className='landing-title'> Wondering What's <br/> For Dinner? </h1>
          <p className='CTA'>Let us help you choose your next meal!</p>
          <SearchBarResults/>
        </div> 

      </div>

      <RandomRecipe/>
      <CuisineResults/>
    </div>
    )
}

export default Home;

