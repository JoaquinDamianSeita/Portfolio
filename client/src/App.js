import './App.css';
import NavBar from "./components/NavBar"
import IntroHero from "./components/IntroHero"
import Works from "./components/Works";
import AboutMe from './components/AboutMe';
import Contact from "./components/Contact";
import Goodbye from "./components/Goodbye";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App sky" id="home">
    <NavBar />
    <IntroHero />
    <div class="b-example-divider" id="sobremi"></div>
    <AboutMe />
    <div class="b-example-divider" id="portfolio"></div>
    <Works />
    <div class="b-example-divider" id="contacto"></div>
    <Contact />
    <Goodbye />
    <Footer />
    </div>
  );
}

export default App;
