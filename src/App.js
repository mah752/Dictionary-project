import Animation from "./Animation";
import Dictionary from "./Dictionary";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictionary</h1>
        </header>
        <Animation/>
      <main>
        <Dictionary/>
      </main>
    </div>
  </div>
  );
}

export default App;
