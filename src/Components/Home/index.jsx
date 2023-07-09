import background from '../../assets/homevid.mp4';
import './style.css';

const Home = (props) => {
  return (
    <div>
    <div className="main panel">
        <video src={background} autoPlay muted  loop/>
        <div className="overlay"></div>
        {/* <HomeBody /> */}
        </div>
    </div>
  )
}
export default Home;