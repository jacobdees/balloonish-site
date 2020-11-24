import React from 'react';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="row my-4">
				<h2 className="col-4 display-4 text-center">My Story</h2>
				<p className="col-8 text-right">
					Here's where a bio would go. This would also be a good place
					to put a quick blurb or mission statement about the company.
				</p>
			</div>
		);
	}
}
