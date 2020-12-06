import React from 'react';
import { Fade } from 'react-reveal';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="about-page">
				<div className="row d-flex align-items-between justify-content-between mx-auto about-page">
					{/* <div className="col-md-4"></div> */}
					<h2 className="about-page-title col-md-3 col-12 text-md-left text-center mt-3 h-0 d-flex align-self-center justify-content-around">
						<Fade left>My Story</Fade>
					</h2>
					<Fade bottom>
						<img
							className="col-md-6"
							src="/images/kam-circle.png"
						></img>
					</Fade>
					<h3 className="about-page-bio col-md-3 mb-3 pr-5 text-md-right text-center h-0 d-flex align-self-center justify-self-center mx-auto">
						<Fade right>
							Here's where a bio would go. This would also be a
							good place to put a quick blurb or mission statement
							about the company.
						</Fade>
					</h3>
				</div>
			</div>
		);
	}
}
