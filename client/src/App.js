import './App.css';
import NavBar from "./components/NavBar"
import IntroHero from "./components/IntroHero"
import Works from "./components/Works";


function App() {
  return (
    <div className="App light-blue">
    <NavBar />
    <IntroHero />
    <div class="b-example-divider"></div>
    <Works />
    </div>
  );
}

export default App;
