import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<nav className={`${styles.headerContainer} ${styles.sticky}`}>
			<ul className={styles.mainNav}>
				<li className='tc'>International Space Station Locator</li>
				<li className={styles.push}><a href="https://en.wikipedia.org/wiki/International_Space_Station">Wikipedia</a><a href="https://www.nasa.gov/mission_pages/station/main/index.html">NASA</a></li>
			</ul>
		</nav>
	);
}

export default Header;
