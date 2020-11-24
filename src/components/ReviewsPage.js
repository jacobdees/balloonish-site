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
		const selectedReview =
			reviews[Math.floor(Math.random() * reviews.length)];
		return (
			<div className="jumbotron jumbotron-fluid review-page">
				{/* <h2 className="col-12 text-center display-4">
					Hear what others have to say...
				</h2> */}
				<div className="row justify-content-center">
					<h3 className="col-10 display-4 display-md-3 text-center">
						"{selectedReview.text}"
					</h3>
					{/* <div className="row justify-content-center">
						<p className="lead justify-content-center">
							- {selectedReview.author}
						</p>
					</div> */}
					{/* insert image here */}
				</div>
			</div>
		);
	}
}
