import React, { Component } from 'react';
import MapComponent from '../components/MapComponent';
import styles from './GoogleMap.module.css';

class GoogleMap extends Component {
	constructor() {
		super();
		this.state = {
			latitude: 37.42216,
			longitude: -122.08427
		}
	}

	componentDidMount () {
		this.getData();
	}

	getData = () => {
		fetch('http://api.open-notify.org/iss-now.json')
			.then(response => response.json())
			.then(position => {
				this.setState({latitude: position.iss_position.latitude});
				this.setState({longitude: position.iss_position.longitude});		
		});
	}

	render () {
		console.log(this.state.latitude);
		console.log(this.state.longitude);
		return (
			<div className={styles.googleMapContainer}>
				<MapComponent latitude={this.state.latitude} longitude={this.state.longitude} zoomLevel='2'/>
				<button type="button" onClick={this.getData}>Refresh</button>
			</div>
		);
	}

}

export default GoogleMap;
