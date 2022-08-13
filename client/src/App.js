
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>
          What do you want for dinner?
        </h1>

        <input type='text' placeholder="ex chicken"/>
        <button onClick={() => console.log('chicken')}> Submit </button> 
    </div>
  );
}

export default App;
