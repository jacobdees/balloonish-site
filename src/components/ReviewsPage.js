import React from 'react';

export default class Reviews extends React.Component {
	render() {
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
				text: "It's OKAY.",
			},
			{
				id: 3,
				author: 'QO',
				rating: 1,
				text: 'Kameron sucks!!!',
			},
		];
		const selectedReview =
			reviews[Math.floor(Math.random() * reviews.length)];
		return (
			<div>
				<h3>Hear what others have to say...</h3>
				<p>{selectedReview.text}</p>
				<p>- {selectedReview.author}</p>
				{/* insert image here */}
			</div>
		);
	}
}
