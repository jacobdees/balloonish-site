import React from 'react';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="about-page">
				<div className="row my-4 d-flex align-items-between about-page">
					{/* <div className="col-md-4"></div> */}
					<h2 className="col-md-3 display-4 h-0 d-flex align-self-center justify-content-center">
						My Story
					</h2>
					<img
						className="col-md-6 d-none d-md-block"
						src="/images/kam-circle.png"
					></img>
					<h3 className="col-md-3 text-md-right text-center h-0 d-flex align-self-center justify-content-center">
						Here's where a bio would go. This would also be a good
						place to put a quick blurb or mission statement about
						the company.
					</h3>
				</div>
			</div>
		);
	}
}
