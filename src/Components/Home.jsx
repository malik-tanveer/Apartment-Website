import Hero from "./Home/Hero";
import Hero1 from "./Home/Hero1";
import ConceptToCreation from "./Home/ConceptToCreation";
import Luxury from "./Home/Luxury";
import Floor from "./Home/Floor";
import Photogallery from "./Home/Photogallery";
// import Comment from "./Home/Comment";
import Location from "./Home/Location";
import Startgey from "./Home/Startgey";
import Backvideo from "./Home/Backvideo";
import Readyapartment from "./Home/Readyapartment";

const Home = () => {
  return (
    <>
      <Hero />
      <Hero1 />
      <ConceptToCreation />  
      <Luxury />
      <Floor />
      <Photogallery />
      {/* <Comment /> */}
      <Location />
      <Startgey />
      <Backvideo />
      <Readyapartment />
    </>
  );
};

export default Home;