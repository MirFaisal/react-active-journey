import { faWalking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Exercises from "./components/exercises/Exercises";

function App() {
  return (
    <div className="App">
      <main id="main">
        <div className="container">
          <div className="text">
            <FontAwesomeIcon className="faWalking" icon={faWalking} />
            <h1 className="hero-text">Active journey</h1>
          </div>
        </div>
      </main>
      <Exercises />
    </div>
  );
}

export default App;
