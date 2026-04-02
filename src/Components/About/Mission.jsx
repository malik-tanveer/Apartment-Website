import "../../Styles/About/Mission.css";

const Mission = () => {
  return (
    <div className="vision-mission-container">
      <h1 style={{textAlign:"center"}} className="heading">Our Vision & Mission</h1>
      <div className="cards-wrapper">
        <div className="custom-card">
          <div className="card-header">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop"
              alt="Vision"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h2 className="card-title vision-title">Our Vision</h2>
            <p className="card-text">
              Our vision is to develop a residential community that embodies modern living with comfort,
              security, and convenience. We aim to provide an elegant and peaceful environment where
              residents can thrive and build their dreams in a space they are proud to call home.
            </p>
          </div>
        </div>
        <div className="custom-card">
          <div className="card-header">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop"
              alt="Mission"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h2 className="card-title mission-title">Our Mission</h2>
            <p className="card-text">
              Our mission is to create and maintain high-quality apartments that meet the diverse
              needs of modern families. We are dedicated to delivering top-notch amenities, excellent
              customer service, and fostering a strong sense of community for all residents.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mission;
