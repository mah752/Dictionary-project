import React from "react";
import Animation from "./Animation";
import Dictionary from "./Dictionary";
import diamonds from "./img/diamonds.png";
//import gem from "./img/gem.png";
import planets from "./img/planets.png"
import "./App.css";

//flip the image on the right of the wizard to make it look better
function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="diamonds" src={planets} alt="" />
        <img className="diamonds2" src={diamonds} alt="" />
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Animation />
        <main>
          <Dictionary defaultKeyword="lucky" />
        </main>
        <footer>
          <p>
            {" "}
            Opensource and coded by{" "}
            <a href="https://github.com/mah752/Dictionary-project">
              Maryan Hussein.{" "}
            </a>
          </p>
          <p>
            Animation from{" "}
            <a href="https://lottiefiles.com/73219-nostradamus">
              Lottie Animations by Afshin Tayebi
            </a>{" "}
            and background icons from{" "}
            <a href="https://www.figma.com/community/file/1079690264559560037">
              {" "}
              diamond Icons by Lilly
            </a>
          </p>
        </footer>
        <br />
      </div>
    </div>
  );
}

export default App;
