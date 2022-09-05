import '../Styles.css'
import SearchResults from "./SearchResults.js"
import {Link} from 'react-router-dom'
import Carousel from './Carousel.js';

function Home() {
    //need to add navbar
  return (
    <> 
    <Link to='/savedRecipes'> <button>Saved</button> </Link>
       
    <div className='content'>
        <h1 className='title'> Whats for dinner?</h1>
        <SearchResults/>
        <Carousel/>
    </div>
    </>



  );
}

export default Home;