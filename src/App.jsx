import {useState,Suspense} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Loader from './Components/Loader';
import About from './Components/About';
// import Footer from './Components/Footer';
import Home2 from './Components/Home2';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Special from './Components/Special';
import Services from './Components/Services';

function App() {
  const [vidplaying,setVidPlaying] = useState(true);

  const stopVideo = () => {
    setVidPlaying(false);
  }
 {/* {
         vidplaying ?  <Home stop={stopVideo}/> : <About />
       } */}
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={ vidplaying ?  <Home stop={stopVideo}/> : <Home2 />}/>
        <Route exact path="/about" element={ <About />}/>
        <Route exact path="/gallery" element={ <Gallery />}/>
        <Route exact path="/services" element={ <Services />}/>
        <Route exact path="/special-offers" element={ <Special />}/>
        <Route exact path="/Contact" element={ <Contact />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
