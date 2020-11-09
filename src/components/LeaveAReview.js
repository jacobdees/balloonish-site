import React from 'react';

export default class LeaveAReview extends React.Component {
	state = {
		error: undefined,
		fname: '',
		lname: '',
		email: '',
		rating: 5,
		review: '',
	};

	render() {
		const onSubmit = (e) => {
			e.preventDefault();

			// send submitted info to back-end
		};

		return (
			<div>
				<h2>Leave a Review!</h2>
				<form onSubmit={this.onSubmit()}>
					<input
						type="text"
						id="fname"
						placeholder="First Name"
					></input>
					<input
						type="text"
						id="lname"
						placeholder="Last Name"
					></input>
					<input type="email" placeholder="Email"></input>
					<input type="rating"></input>
					<label for="review">Comments:</label>
					<input type="text" id="review" placeholder=""></input>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
