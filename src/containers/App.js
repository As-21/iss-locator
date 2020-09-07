import React, { Component } from 'react';
import Header from '../components/Header';
import About from './About';
import GoogleMap from './GoogleMap';
import Footer from '../components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<About />
				<GoogleMap />
				<Footer />
    		</div>
		);
	}
}

export default App;
