import React, { useEffect, useRef,useState, Suspense } from 'react';
import background from '../../assets/ff.mp4'; 
import './style.css';
import Loader from '../Loader';


const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoLoaded = () => {
      videoElement.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    };

    videoElement.addEventListener('loadeddata', handleVideoLoaded);

    return () => {
      videoElement.removeEventListener('loadeddata', handleVideoLoaded);
    };
  }, []);

  const toggleAudio = () => {
    const videoElement = videoRef.current;
    videoElement.muted = !videoElement.muted;
    setIsMuted(!isMuted);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="main panel">
        <video ref={videoRef} src={background} autoPlay loop muted={isMuted} />
        <div className="overlay">
          <button onClick={toggleAudio}>
            {isMuted ? 'Unmute' : 'Mute'} Audio
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;

