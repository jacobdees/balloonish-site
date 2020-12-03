import React from 'react';
import { Fade } from 'react-reveal';

export default class Banner extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="banner-img1 row d-flex justify-content-center">
					<Fade top>
						<img
							src="/images/logo-removebg-preview.png"
							className="banner-logo"
						/>
					</Fade>
				</div>
			</div>
		);
	}
}
