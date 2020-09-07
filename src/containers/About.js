import React from 'react';
import Image from '../components/Image'
import Paragraph from '../components/Paragraph'
import styles from './About.module.css';

const About = () => {
	return (
		<div className={styles.aboutcontianer}>
			<Image />
			<Paragraph />
		</div>
	);
}

export default About;
