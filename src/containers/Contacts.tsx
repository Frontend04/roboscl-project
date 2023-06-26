import React from "react";
import Header from "../components/Header";
import PersonIcon from "@mui/icons-material/Person";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import "../App.css";
import Map from "../components/Map";
import Footer from "../components/Footer";
const Contacts: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="contacts container">
        <div className="mainConstact">
          <div className="user contact">
            <PersonIcon fontSize="large" />
            <span>Michael Lazaridis</span>
          </div>
          <div className="phone contact">
            <ContactPhoneIcon fontSize="large" />
            <a href="tel:+312880880880">312 880 880 880</a>
          </div>
          <div className="mail contact">
            <MarkEmailReadIcon fontSize="large" />
            <span>roboschool@mail.com</span>
          </div>
          <div className="gps contact">
            <LocationOnIcon fontSize="large" />
            <span>Maldybaeva 71</span>
          </div>
        </div>
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
