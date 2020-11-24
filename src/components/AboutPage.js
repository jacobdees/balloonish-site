import React from 'react';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="row my-4">
				<h2 className="col-sm-4 display-4 text-center pb-5">
					My Story
				</h2>
				<p className="col-sm-8 text-sm-right text-center">
					Here's where a bio would go. This would also be a good place
					to put a quick blurb or mission statement about the company.
				</p>
			</div>
		);
	}
}
