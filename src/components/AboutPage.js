import React from 'react';
import { Fade } from 'react-reveal';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="about-page">
				<div className="row d-flex align-items-between justify-content-around mx-auto about-page">
					{/* <div className="col-md-4"></div> */}
					{/* <h2 className="about-page-title col-md-3 col-12 text-md-left text-center mt-3 h-0 d-flex align-self-center justify-content-around">
						<Fade left duration={2500} delay={500}>
							My Story
						</Fade>
					</h2> */}
					<Fade bottom duration={2000}>
						<img
							className="col-md-6"
							src="/images/kam-circle-no-beige.png"
						></img>
					</Fade>
					<h3 className="about-page-bio col-md-3 mb-5 mb-md-3 pr-5 text-md-right text-center h-0 d-flex align-self-center justify-self-center">
						<Fade right duration={2000} delay={0} cascade>
							<span>
								<p>
									Here's where a bio would go. This would also
									be a good place to put a quick blurb or
									mission statement about the company.
								</p>
								<p>
									Here's where a bio would go. This would also
									be a good place to put a quick blurb or
									mission statement about the company.
								</p>
								<p>
									Here's where a bio would go. This would also
									be a good place to put a quick blurb or
									mission statement about the company.
								</p>
							</span>
						</Fade>
					</h3>
				</div>
			</div>
		);
	}
}
