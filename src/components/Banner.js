import React from 'react';

export default class Banner extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="banner-img1 row d-flex justify-content-center">
					<img
						src="/images/logo-removebg-preview.png"
						className="banner-logo"
					/>
				</div>
			</div>
		);
	}
}
