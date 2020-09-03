import React from 'react';
import 'tachyons';

const Image = () => {
	return (
		<div>
			<img className='' src={require("../content/ISS_about_picture.jpg")}
				alt="International Space Station"
				height="auto" style={{borderRadius: '20px'}} />
		</div>			
	);
}

export default Image;