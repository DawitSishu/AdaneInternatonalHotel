import {useState} from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Loader from './Components/Loader';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  const [vidplaying,setVidPlaying] = useState(true);

  const stopVideo = () => {
    setVidPlaying(false);
  }

  return (
    <div >
      {
        vidplaying ?  <Home stop={stopVideo}/> : <About />
      }
        
        {/* <Loader /> */}
        {/* <NavBar />
        <About /> */}
    </div>
  )
}

export default App
