import Animation from "./Animation";
import Dictionary from "./Dictionary";
import diamonds from "./img/diamonds.png";
import gem from "./img/gem.png"
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
       <img className="diamonds" src={diamonds} alt="" /> 
       <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Animation />
        <main>
          <img className="gem" src={gem} alt="" />
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
