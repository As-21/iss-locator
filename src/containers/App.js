import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import GoogleMap from './GoogleMap';
import Footer from './Footer';

class App extends Component {
	// constructor() {
	// 	
	// }

	// componentDidMount () {

	// }

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
