import React from 'react';
import {
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SimpleRating from './SimpleRating';

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
			<div className="review-form">
				{this.state.error === undefined ? (
					<div className="row d-flex justify-content-center align-items-center h-100 py-auto">
						<h2 className="review-form-title col-md-4 text-center order-md-12 d-flex align-items-center justify-content-center">
							Leave a Review!
						</h2>
						<Form
							onSubmit={this.onSubmit}
							className="col-md-4 order-md-1"
						>
							<Row form className="d-flex justify-content-center">
								<Col md={5} xs={8}>
									<FormGroup className="">
										<Input
											type="text"
											id="fName"
											placeholder="First Name"
											value={this.state.fName}
											onChange={this.onfNameChange}
											className="form-box"
										></Input>
									</FormGroup>
								</Col>
								<Col md={5} xs={8}>
									<FormGroup>
										<Input
											type="text"
											id="lName"
											placeholder="Last Name"
											value={this.state.lName}
											onChange={this.onlNameChange}
											className="form-box"
										></Input>
									</FormGroup>
								</Col>
							</Row>
							<Row form className="d-flex justify-content-center">
								<Col md={10} xs={8}>
									<FormGroup>
										<Input
											type="email"
											placeholder="Email"
											value={this.state.email}
											onChange={this.onEmailChange}
											className="form-box"
										></Input>
									</FormGroup>
								</Col>
							</Row>
							<Row form className="d-flex justify-content-center">
								<Col md={3}>
									<FormGroup className="text-center">
										<Label
											htmlFor="rating"
											className="text-center"
										>
											Rating
										</Label>
										{/* <SimpleRating
											rating={this.state.rating}
										/> */}
										<div>
											<Box
												component="fieldset"
												borderColor="transparent"
												display="flex"
												alignItems="center"
												justifyContent="center"
											>
												{/* <Typography component="legend">Pristine</Typography> */}
												<Rating
													name="pristine"
													value={this.state.rating}
													onChange={
														this.onRatingChange
													}
													size="large"
													precision={0.5}
												/>
											</Box>
										</div>
									</FormGroup>
								</Col>
								<Col md={7} xs={8}>
									<FormGroup>
										{/* <Label htmlFor="review">
											Comments:
										</Label> */}
										<Input
											type="textarea"
											id="review"
											value={this.state.review}
											onChange={this.onReviewChange}
											placeholder="Comments"
											className="form-box"
										></Input>
									</FormGroup>
								</Col>
							</Row>
							{/* <FormGroup>
								<Label htmlFor="customerPicture">Picture</Label>
								<Input
									type="file"
									name="file"
									id="customerPicture"
									value={this.state.picture}
									onChange={this.onPictureChange}
								/>
							</FormGroup> */}
							<div className="d-flex justify-content-center">
								<Button className="order-button col-8 col-lg-10">
									Submit
								</Button>
							</div>
						</Form>
					</div>
				) : (
					<h1 className="text-center">
						Thank you for submitting your review of balloon.ish!
					</h1>
				)}
			</div>
		);
	}
}
