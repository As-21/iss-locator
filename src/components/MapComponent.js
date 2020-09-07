import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import './Map.css';

const Map = ({ latitude, longitude, zoomLevel }) => {
	return (
	  <div className="map">
	    <h2 className="map-h2">International Space Station Location</h2>

	    <div className="google-map">
	      <GoogleMapReact
	        bootstrapURLKeys={{ key: 'Your key here' }}
	        defaultCenter={{
				  address: 'International Space Station Location.',
				  lat: 37.42216,
				  lng: -122.08427,
				}}
	        defaultZoom={1}
	      >
	        <LocationPin 
	          lat={latitude}
	          lng={longitude}
	          text={'International Space Station'}
	        />
	      </GoogleMapReact>
	    </div>
	  </div>
	);
}

export default Map
