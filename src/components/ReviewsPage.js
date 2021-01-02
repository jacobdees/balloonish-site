import React from 'react';
import { Fade } from 'react-reveal';

const reviews = [
	{
		id: 1,
		author: 'JD',
		rating: 5,
		text: 'Here is my review of balloon.ish',
	},
	{
		id: 2,
		author: 'IW',
		rating: 3,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam justo, mollis quis felis a, blandit hendrerit ex. Suspendisse pulvinar ante sit amet placerat venenatis.',
	},
	{
		id: 3,
		author: 'QO',
		rating: 1,
		text:
			'Aenean porttitor ornare sagittis. Integer at convallis magna. Morbi pulvinar lacinia malesuada.',
	},
];

const selectedReview = reviews[Math.floor(Math.random() * reviews.length)].text;

export default class Reviews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedReview: selectedReview,
		};
	}
	render() {
		return (
			<div className="review-page container-fluid">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<Fade clear fraction={0.95}>
						<h2 className="col-10 col-md-6 review-text text-center">
							"{this.state.selectedReview}"
						</h2>
					</Fade>
					{/* insert image here */}
				</div>
			</div>
		);
	}
}
