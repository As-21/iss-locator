import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<nav className='headercontainer sticky'>
			<ul className='main-nav'>
				<li className='tc'>International Space Station Locator</li>
				<li className='push'><a href="https://en.wikipedia.org/wiki/International_Space_Station">Wikipedia</a><a href="https://www.nasa.gov/mission_pages/station/main/index.html">NASA</a></li>
			</ul>
		</nav>
	);
}

export default Header;
