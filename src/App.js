import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Dictionary 📖</h1>
        </header>
        <Dictionary defaultKeyword="tulips" />
      </div>
      <br />
      <footer>
        This project was coded by Réka Nagy and is open-sourced on
        <a
          href="https://github.com/RekaNagy/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionary-app-project-rn.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
