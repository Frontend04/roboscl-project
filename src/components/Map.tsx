import React from "react";
import GoogleMapReact from "google-map-react";
import { IProps } from "../types";
import "../App.css";
const AnyReactComponent: React.FC<IProps> = ({ text }) => <div>{text}</div>;

const Map: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
