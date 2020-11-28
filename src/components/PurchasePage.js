import React from 'react';
import {
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu,
	Modal,
	ModalHeader,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import MenuItems from './MenuItems';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { normalize } from 'react-phone-input-auto-format';

export default class PurchasePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: undefined,
			formSubmitted: false,
			fName: props.fName,
			lName: props.lName,
			tel: props.tel,
			email: props.email,
			pref: props.pref,
			dropdown: false,
			item: props.item,
			date: props.date,
			calendarFocused: false,
			note: props.note,
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

	onTelChange = (e) => {
		const tel = normalize(e);
		const normTel = normalize(tel);
		this.setState(() => ({ normTel }));
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};

	onPrefChange = (e) => {
		const pref = e.target.value;
		this.setState(() => ({ pref }));
	};

	onDropdownChange = (e) => {
		const dropdown = e.target.value;
		this.setState(() => ({ dropdown: !this.state.dropdown }));
	};

	onItemChange = (e) => {
		const item = e.target.value;
		this.setState(() => ({ item }));
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
		if (
			this.state.fName &&
			this.state.lName &&
			((this.state.pref === 'tel' && this.state.tel) ||
				(this.state.pref === 'email' && this.state.email) ||
				(this.state.pref === both &&
					this.state.tel &&
					this.state.email)) &&
			this.state.item &&
			this.state.date
		) {
			alert('SUBMITTED');
			this.props.handleClose();
			this.setState(() => ({ error: false }));
		} else {
			this.setState(() => ({ error: true }));
		}
	};

	render() {
		return (
			<div>
				<div className="d-flex justify-content-center">
					<Button
						className="order-button col-lg-6 col-12 py-4 my-5"
						onClick={this.props.onClick}
					>
						Order Now
					</Button>
				</div>
				<Modal
					isOpen={this.props.modalOpen}
					toggle={this.props.handleClose}
					className="full-modal"
					centered
					size="md"
				>
					<div className="modal-body row d-flex justify-content-center">
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
										<PhoneInput
											type="tel"
											id="tel"
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
								<Col xs={9} className="mx-auto my-2">
									<FormGroup>
										<Input
											type="email"
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
								<Col
									md={8}
									className="mx-auto my-2 text-center"
								>
									<FormGroup
										tag="fieldset"
										check
										inline
										invalid={
											this.state.error && !this.state.pref
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
													name="radio2"
													value="tel"
													onChange={this.onPrefChange}
													className=""
												/>{' '}
												Phone
											</Label>
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input
													type="radio"
													name="radio2"
													value="email"
													onChange={this.onPrefChange}
													className=""
												/>{' '}
												Email
											</Label>
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input
													type="radio"
													name="radio2"
													value="both"
													onChange={this.onPrefChange}
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
									xs={6}
									className="mx-auto my-2 text-center d-flex justify-content-center my-auto"
								>
									<FormGroup className="">
										<select
											onChange={this.onItemChange}
											className="form-box"
											placeholder="Choose an Item"
										>
											<option
												value=""
												disabled
												selected
												style={{ color: '$off-white' }}
											>
												Choose an Item
											</option>
											{MenuItems.MenuItems.map((m) => (
												<option
													key={m.id}
													value={this.state.item}
													className="dropdown-options"
												>
													{m.item} ({m.type})
												</option>
											))}
										</select>
									</FormGroup>
								</Col>
							</Row>
							<Row className="d-flex justify-content-center align-items-center mx-auto">
								<Col
									xs={6}
									className="my-auto d-flex justify-content-center"
								>
									<FormGroup>
										<DatePicker
											selected={this.state.date}
											onChange={(date) =>
												this.onDateChange(date)
											}
											placeholderText="Choose a Date"
											style={{ placeholder: 'white' }}
											className="date-form-box text-center"
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
											placeholder="(Optional)"
											value={this.state.review}
											onChange={this.onNoteChange}
											className=" form-box"
										></Input>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col
									md={12}
									className="mx-auto my-2 text-center"
								>
									<Button
										className="cancel-button col-6 col-md-4 m-2"
										onClick={this.props.handleClose}
									>
										Cancel
									</Button>
									<Button className="order-button col-6 col-md-4 m-2">
										Submit
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</Modal>
			</div>
		);
	}
}
