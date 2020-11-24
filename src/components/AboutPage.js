import React from 'react';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row my-4 d-flex align-items-around about-page">
					<h2 className="col-md-4 display-4 text-center pb-md-5">
						My Story
					</h2>
					<div className="col-md-4"></div>
					<p className="col-md-4 text-md-right text-center">
						Here's where a bio would go. This would also be a good
						place to put a quick blurb or mission statement about
						the company.
					</p>
				</div>
			</div>
		);
	}
}
