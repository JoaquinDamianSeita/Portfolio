import './App.css';
import NavBar from "./components/NavBar"
import IntroHero from "./components/IntroHero"
import Works from "./components/Works";


function App() {
  return (
    <div className="App sky">
    <NavBar />
    <IntroHero />
    <div class="b-example-divider"></div>
    <Works />
    <div class="b-example-divider"></div>
    </div>
  );
}

export default App;
