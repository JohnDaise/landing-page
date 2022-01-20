import '../App.css';
import Gallery from './Gallery';


function Body() {
  return (
    <div>
        <img className="spot-img" src={require("../Assets/Images/spotlight.jpeg")} alt={"spot"} />
        <Gallery/>
    </div>
  );
}

export default Body;