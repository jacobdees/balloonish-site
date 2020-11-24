import React from 'react';

export default class ReviewForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: undefined,
			fName: props.fName,
			lName: props.lName,
			email: props.email,
			rating: props.rating,
			review: props.review,
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
		// e.preventDefault();
		// send submitted info to back-end

		if (!this.state.email || !this.state.rating) {
			this.setState(() => ({
				error: 'Email and rating required',
			}));
		} else {
			this.setState(() => ({ error: '' }));
			this.onSubmit({
				fName: this.state.fName,
				lName: this.state.lName,
				email: this.state.email,
				rating: parseFloat(this.state.rating),
				review: this.state.review,
			});
		}
	};

	render() {
		// if (this.state.error === '') {
		return (
			<div>
				{this.state.error === undefined ? (
					<div>
						<h2>Leave a Review!</h2>
						<form onSubmit={this.onSubmit}>
							<input
								type="text"
								id="fName"
								placeholder="First Name"
								value={this.state.fName}
								onChange={this.onfNameChange}
							></input>
							<input
								type="text"
								id="lName"
								placeholder="Last Name"
								value={this.state.lName}
								onChange={this.onlNameChange}
							></input>
							<input
								type="email"
								placeholder="Email"
								value={this.state.email}
								onChange={this.onEmailChange}
							></input>
							<input
								type="rating"
								value={this.state.rating}
								onChange={this.onRatingChange}
							></input>
							<label htmlFor="review">Comments:</label>
							<input
								type="text"
								id="review"
								value={this.state.review}
								onChange={this.onReviewChange}
							></input>
							<button>Submit</button>
						</form>
					</div>
				) : (
					<h2>
						Thank you for submitting your review of balloon.ish!
					</h2>
				)}
			</div>
		);
	}
}
