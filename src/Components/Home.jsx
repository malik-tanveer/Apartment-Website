import Hero from "./Hero";
import Developer from "./Developer";
import Luxury from "./Luxury";
import Floor from "./Floor";
import Photogallery from "./Photogallery";
import Comment from "./Comment";
import Location from "./Location";
import Startgey from "./Startgey";
import Backvideo from "./Backvideo";
import Readyapartment from "./Readyapartment";
import Hero1 from "./Hero1";

const Home = () => {
  return (
    <>
      <Hero />
      <Hero1 />
      {/* <Developer />  ya bhut mushkil ha ya nahi bna ga */}
      <Luxury />
      <Floor />
      <Photogallery />
      <Comment />
      <Location />
      <Startgey />
      <Backvideo />
      <Readyapartment />
    </>
  );
};

export default Home;
