import '../Styles.css'
import SearchResults from "./SearchResults.js"

function Home() {
  return (
    <div className='content'>
        <h1 className='title'> Whats for dinner?</h1>
        <SearchResults/>
    </div>
  );
}

export default Home;