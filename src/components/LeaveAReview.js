import React from 'react';

export default class LeaveAReview extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: undefined,
			fName: '',
			lName: '',
			email: '',
			rating: 5,
			review: '',
		};
	}

	onfNameChange = (e) => {
		const fName = e.target.value;
		this.setState(() => ({ fName }));
	};

	onlNameChange = (e) => {
		const lName = e.target.value;
		this.setState(() => ({ lName }));
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};

	onRatingChange = (e) => {
		const rating = e.target.value;
		this.setState(() => ({ rating }));
	};

	onReviewChange = (e) => {
		const review = e.target.value;
		this.setState(() => ({ review }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		// send submitted info to back-end

		if (!this.state.email || !this.state.rating) {
			this.setState(() => ({
				error: 'Email and rating required',
			}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				fName: this.state.fName,
				lName: this.state.lName,
				email: this.state.email,
				rating: this.state.rating,
				review: this.state.review,
			});
		}
	};

	render() {
		return (
			<div>
				<h2>Leave a Review!</h2>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						id="fName"
						placeholder="First Name"
						onChange={this.onfNameChange}
					></input>
					<input
						type="text"
						id="lName"
						placeholder="Last Name"
						onChange={this.onlNameChange}
					></input>
					<input
						type="email"
						placeholder="Email"
						onChange={this.onEmailChange}
					></input>
					<input type="rating" onChange={this.onRatingChange}></input>
					<label for="review">Comments:</label>
					<input
						type="text"
						id="review"
						onChange={this.onReviewChange}
					></input>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
