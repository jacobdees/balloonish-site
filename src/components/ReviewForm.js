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
import emailjs from 'emailjs-com';
import SimpleRating from './SimpleRating';
import { Fade, Zoom } from 'react-reveal';

export default class ReviewForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			formSubmitted: false,
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
		e.preventDefault();
		// send submitted info to back-end

		const templateParams = {
			FirstName: this.state.fName,
			LastName: this.state.lName,
			Rating: this.state.rating,
			EmailAddress: this.state.email,
			Review: this.state.review,
		};

		emailjs
			.send(
				'jacobd139',
				'balloon.ish-review',
				templateParams,
				'user_vQr9F12F8HQtq9R60srwH'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		if (!this.state.rating) {
			this.setState(() => ({
				error: true,
			}));
		} else {
			this.setState(() => ({ error: false, formSubmitted: true }));
		}
	};

	render() {
		// if (this.state.error === '') {
		return (
			<div className="review-form">
				{this.state.formSubmitted === false ? (
					<div className="row d-flex justify-content-center align-items-center h-100 py-auto">
						<h1 className="review-form-title col-md-4 text-center order-md-12 d-flex align-items-center justify-content-center">
							<Zoom duration={1250}>Leave a Review!</Zoom>
						</h1>
						<Form
							onSubmit={this.onSubmit}
							className="col-md-4 order-md-1 order-modal-body p-5"
						>
							{/* <Zoom duration={1250}> */}
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
											invalid={
												this.state.error &&
												!this.state.fName
													? true
													: false
											}
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
											invalid={
												this.state.error &&
												!this.state.fName
													? true
													: false
											}
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
											invalid={
												this.state.error &&
												!this.state.fName
													? true
													: false
											}
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
							<div className="d-flex row justify-content-center">
								{this.state.error && !this.state.rating ? (
									<p className="submission-error-text text-center">
										Please provide a rating
									</p>
								) : (
									<p></p>
								)}
							</div>
							<div className="d-flex row justify-content-center">
								<Button className="order-button col-8 col-lg-10">
									Submit
								</Button>
							</div>
							{/* </Zoom> */}
						</Form>
					</div>
				) : (
					<div className="container h-100">
						<div className="row display-flex justify-content-center text-center align-items-center h-100 py-auto">
							<Fade bottom>
								<h1 className="col-12">
									Thank you for submitting your review of
									balloon.ish!
								</h1>
							</Fade>
						</div>
					</div>
				)}
			</div>
		);
	}
}
