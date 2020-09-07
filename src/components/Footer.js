import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<nav className={styles.footerContainer}>
			<ul className={styles.mainNav}>
				<li className='tc'><a href="https://github.com/">GitHub</a></li>
				<li className='tc'><a href="https://www.facebook.com/">Facebook</a></li>
			</ul>
		</nav>
	);
}

export default Footer;