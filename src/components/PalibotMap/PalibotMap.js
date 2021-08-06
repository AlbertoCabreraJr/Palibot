import GoogleMapReact from "google-map-react";
import "./map.css";

const DEFAULT_CENTER = {
  lat: 10.315699,
  lng: 123.885437,
};

const DEFAULT_ZOOM = 15;

const PalibotMap = () => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBagxUaCmFDt4KXo-eHUshTO-yQWVMARQI" }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
      />
    </div>
  );
};

export default PalibotMap;
