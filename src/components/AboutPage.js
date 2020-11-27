import React from 'react';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="about-page">
				<div className="row d-flex align-items-between about-page">
					{/* <div className="col-md-4"></div> */}
					<h2 className="about-page-title col-md-3 mt-3 h-0 d-flex align-self-center justify-content-center">
						My Story
					</h2>
					<img
						className="col-md-6"
						src="/images/kam-circle.png"
					></img>
					<h3 className="about-page-bio col-md-3 mb-3 text-md-right text-center h-0 d-flex align-self-center justify-self-center mx-auto">
						Here's where a bio would go. This would also be a good
						place to put a quick blurb or mission statement about
						the company.
					</h3>
				</div>
			</div>
		);
	}
}
