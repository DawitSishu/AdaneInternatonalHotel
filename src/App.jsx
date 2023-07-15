import {useState} from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Loader from './Components/Loader';
import About from './Components/About';
import Footer from './Components/Footer';
import Home2 from './Components/Home2';

function App() {
  const [vidplaying,setVidPlaying] = useState(true);

  const stopVideo = () => {
    setVidPlaying(false);
  }

  return (
    <div >
      {/* {
        vidplaying ?  <Home stop={stopVideo}/> : <About />
      } */}
        {/* <Home /> */}
        {/* <Loader /> */}
         <NavBar />
        {/* <About /> */}
        <Home2 />
    </div>
  )
}

export default App
