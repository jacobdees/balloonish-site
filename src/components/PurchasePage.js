import React from 'react';
import {
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
// import { GoogleSpreadsheet } from 'google-spreadsheet';
import DatePicker from 'react-datepicker';
import emailjs from 'emailjs-com';
import MenuItems from './MenuItems';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { normalize } from 'react-phone-input-auto-format';
import { Slide, Fade, Pulse } from 'react-reveal';

// const SPREADSHEET_ID = '1FciUy-bW8A4hqmQqfWHY6IITDSv3JKDRXQyqVCeavpA';
// const CLIENT_ID =
// 	'1058351575600-8o2peomlils5g2q7ahr5c0iqhckgv1t0.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyAAbMi9MDDZh6gPhGtdiL7h8c1r1FWopMI';
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

export default class PurchasePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			errorArr: [],
			formSubmitted: false,
			fName: props.fName,
			lName: props.lName,
			tel: props.tel,
			normTel: '',
			email: props.email,
			pref: props.pref,
			dropdown: false,
			item: props.item,
			date: props.date,
			calendarFocused: false,
			note: props.note,
		};
	}

	// componentDidMount() {
	// 	gapi.load('client:auth2', this.initClient);
	// }

	// handleClientLoad = () => {
	// 	//initialize the Google API
	// 	gapi.load('client:auth2', this.initClient);
	// };

	initClient = () => {
		//provide the authentication credentials you set up in the Google developer console
		gapi.client
			.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				scope: SCOPE,
				discoveryDocs: [
					'https://sheets.googleapis.com/$discovery/rest?version=v4',
				],
			})
			.then(() => {
				gapi.auth2
					.getAuthInstance()
					.isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
				this.updateSignInStatus(
					gapi.auth2.getAuthInstance().isSignedIn.get()
				);
			});
	};

	onfNameChange = (e) => {
		const fName = e.target.value;
		this.setState(() => ({ fName }));
	};

	onlNameChange = (e) => {
		const lName = e.target.value;
		this.setState(() => ({ lName }));
	};

	onTelChange = (e) => {
		// const tel = normalize(e);
		// const normTel = normalize(tel);
		const tel = e.target.value;
		this.setState(() => ({ tel }));
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};

	onPrefChange = (e) => {
		const pref = e.target.value;
		this.setState(() => ({ pref }));
	};

	onDropdownToggle = (e) => {
		// const dropdown = e.target.value;
		this.setState(() => ({ dropdown: !this.state.dropdown }));
	};

	onItemChange = (e) => {
		const item = e.target.value;
		this.setState(() => ({ item }));
		// this.onDropdownToggle();
	};

	onDateChange = (e) => {
		// const date = e.target.value;
		this.setState(() => ({ date: e }));
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		const templateParams = {
			FirstName: this.state.fName,
			LastName: this.state.lName,
			Item: this.state.item,
			Date: this.state.date,
			Note: this.state.note,
			EmailAddress: this.state.email,
			TelephoneNumber: this.state.tel,
			Preference: this.state.pref,
		};

		// emailjs
		// 	.send(
		// 		'jacobd139',
		// 		'balloon.ish-order',
		// 		templateParams,
		// 		'user_vQr9F12F8HQtq9R60srwH'
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text);
		// 		},
		// 		(error) => {
		// 			console.log(error.text);
		// 		}
		// 	);

		let infoArr = [
			this.state.fName,
			this.state.lName,
			this.state.tel,
			this.state.email,
			this.state.item,
			this.state.date,
		];
		if (
			this.state.fName &&
			this.state.lName &&
			this.state.tel &&
			this.state.email &&
			this.state.item &&
			this.state.date
		) {
			this.setState(() => ({ error: false, formSubmitted: true }));
		} else {
			let newError = [];
			if (this.state.item == null && this.state.date == null) {
				newError.push('Choose an item', 'Choose a date');
			} else if (this.state.item == null) {
				newError.push('Choose an item');
			} else if (this.state.date == null) {
				newError.push('Choose a date');
			}
			this.setState(() => ({
				error: true,
				errorArr: newError,
			}));
		}
	};

	render() {
		return (
			<div>
				{/* <div className="d-flex justify-content-center purchase-button">
					<Button
						className="order-button col-lg-5 col-10 py-4 my-5"
						onClick={this.props.onClick}
					>
						Order Now
					</Button>
				</div> */}
				{this.state.formSubmitted ? (
					<Fade top>
						<Modal
							isOpen={this.props.modalOpen}
							toggle={this.props.handleClose}
							centered
							size="md"
							className=""
						>
							<div className="order-modal-body row d-flex justify-content-center">
								<ModalHeader className="modal-title row d-flex justify-content-center">
									Thank you!
								</ModalHeader>
								<div className="row d-flex justify-content-center">
									<ModalBody className="text-center col-10">
										<h2>
											We have received your order. We will
											contact you soon to retrieve more
											information about your special
											occasion!
										</h2>
										<Button
											className="cancel-button col-4 m-2"
											onClick={this.props.handleClose}
										>
											Close
										</Button>
									</ModalBody>
								</div>
							</div>
						</Modal>
					</Fade>
				) : (
					<Modal
						isOpen={this.props.modalOpen}
						toggle={this.props.handleClose}
						className=""
						centered
						size="md"
					>
						<div className="order-modal-body row d-flex justify-content-center">
							<ModalHeader
								// toggle={this.props.handleClose}
								// charCode="&times;"
								className="modal-title"
							>
								Purchase Information
							</ModalHeader>
							{/* <h1 className="col-12 text-center">
							Purchase Information
						</h1> */}
							<Form onSubmit={this.onSubmit}>
								<Row>
									<Col xs={9} className="mx-auto my-2">
										<FormGroup>
											<Input
												type="text"
												id="fName"
												name="FirstName"
												autoFocus
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
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs={9} className="mx-auto my-2">
										<FormGroup>
											<Input
												type="text"
												id="lName"
												name="LastName"
												placeholder="Last Name"
												value={this.state.lName}
												onChange={this.onlNameChange}
												className=" form-box"
												invalid={
													this.state.error &&
													!this.state.lName
														? true
														: false
												}
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs={9} className="mx-auto my-2">
										<FormGroup>
											<Input
												type="email"
												id="email"
												name="EmailAddress"
												placeholder="Email"
												value={this.state.email}
												onChange={this.onEmailChange}
												className="form-box"
												invalid={
													this.state.error &&
													!this.state.email
														? true
														: false
												}
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs={9} className="mx-auto my-2">
										<FormGroup>
											<Input
												type="tel"
												inputMode="tel"
												id="tel"
												name="TelephoneNumber"
												placeholder="Phone"
												value={this.state.tel}
												onChange={this.onTelChange}
												className="col-md-12 form-box"
												invalid={
													this.state.error &&
													!this.state.tel
														? true
														: false
												}
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col
										md={8}
										className="mx-auto my-2 text-center"
									>
										<FormGroup
											tag="fieldset"
											check
											inline
											invalid={
												this.state.error &&
												!this.state.pref
													? true
													: false
											}
										>
											<FormGroup check inline>
												<Label check>
													Contact Preference{' '}
												</Label>
											</FormGroup>
											<FormGroup check>
												<Label check>
													<Input
														type="radio"
														name="Preference"
														value="Prefers Email"
														onChange={
															this.onPrefChange
														}
														className=""
													/>{' '}
													Email
												</Label>
											</FormGroup>
											<FormGroup check>
												<Label check>
													<Input
														type="radio"
														name="Preference"
														value="Prefers Phone"
														onChange={
															this.onPrefChange
														}
														className=""
													/>{' '}
													Phone
												</Label>
											</FormGroup>
											<FormGroup check>
												<Label check>
													<Input
														type="radio"
														name="Preference"
														value="Email or Phone"
														onChange={
															this.onPrefChange
														}
														className=""
													/>{' '}
													Both
												</Label>
											</FormGroup>
										</FormGroup>
									</Col>
								</Row>
								<Row className="d-flex justify-content-center align-items-center mx-auto">
									<Col
										xs={8}
										className="mx-auto my-2 text-center d-flex justify-content-center my-auto"
									>
										<FormGroup className="">
											{/* <Input> */}
											<Dropdown
												group
												size="lg"
												// name="Item"
												value={DropdownItem.value}
												isOpen={this.state.dropdown}
												toggle={this.onDropdownToggle}
												onChange={this.onItemChange}
												className="dropdown-button"
											>
												<DropdownToggle
													className="order-button"
													name="Item"
													value={this.state.item}
												>
													{this.state.item
														? this.state.item
														: 'Choose an Item'}
												</DropdownToggle>
												<DropdownMenu>
													{MenuItems.MenuItems.map(
														(m) => (
															<DropdownItem
																key={m.id}
																value={`${m.item} (${m.type})`}
																onClick={
																	this
																		.onItemChange
																}
															>
																{m.item} (
																{m.type})
															</DropdownItem>
														)
													)}
												</DropdownMenu>
											</Dropdown>
										</FormGroup>
									</Col>
								</Row>
								<Row className="d-flex justify-content-center align-items-center mx-auto">
									<Col
										xs={8}
										className="my-auto d-flex justify-content-center"
									>
										<FormGroup>
											<DatePicker
												selected={this.state.date}
												onChange={(date) =>
													this.onDateChange(date)
												}
												placeholderText="Choose a Date"
												className="date-form-box text-center"
												name="Date"
												invalid={
													this.state.error &&
													!this.state.date
														? true
														: false
												}
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs={9} className="mx-auto my-2">
										<FormGroup>
											<Label htmlFor="note">
												Extra Comments:{' '}
											</Label>
											<Input
												type="textarea"
												id="note"
												name="Note"
												placeholder="(Optional)"
												value={this.state.review}
												onChange={this.onNoteChange}
												className=" form-box"
											></Input>
										</FormGroup>
									</Col>
								</Row>
								{this.state.error ? (
									<div className="submission-error-text">
										<Slide bottom cascade duration={750}>
											<p>
												In order to complete your order,
												we need the following
												information:
											</p>
											<ul>
												{this.state.errorArr.map(
													(e) => (
														<li>{e}</li>
													)
												)}
											</ul>
										</Slide>
									</div>
								) : (
									<p></p>
								)}
								<Row>
									<Col
										md={12}
										className="mx-auto my-2 text-center"
									>
										<Button
											className="cancel-button col-4 m-2"
											onClick={this.props.handleClose}
										>
											Cancel
										</Button>
										<Button className="order-button col-4 m-2">
											Submit
										</Button>
									</Col>
								</Row>
							</Form>
						</div>
					</Modal>
				)}
			</div>
		);
	}
}
