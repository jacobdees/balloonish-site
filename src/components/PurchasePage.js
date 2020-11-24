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
	Modal,
	ModalHeader,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { normalize } from 'react-phone-input-auto-format';

export default class PurchasePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: undefined,
			fName: props.fName,
			lName: props.lName,
			tel: props.tel,
			email: props.email,
			pref: props.pref,
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

		this.props.handleClose();
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
					<div className="modal-body">
						<ModalHeader
							toggle={this.props.handleClose}
							charCode="&times;"
							className="modal-title"
							style={{
								borderBottom: 'none',
								textAlign: 'center',
							}}
						></ModalHeader>
						<h1 className="col-12 text-center">
							Purchase Information
						</h1>
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
											className=" form-box"
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
											className=" form-box"
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col
									md={8}
									className="mx-auto my-2 text-center"
								>
									<FormGroup tag="fieldset" check inline>
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
													className=""
												/>{' '}
												Both
											</Label>
										</FormGroup>
									</FormGroup>
								</Col>
							</Row>
							{/* <Row> */}
							{/* <Col xs={9} className="mx-auto my-2 text-center"> */}
							{/* <FormGroup> */}
							{/* ADD DROPDOWN BUTTON HERE */}
							{/* <label htmlFor="item">
												Choose an Item:{' '}
											</label>
											<Dropdown
												id="item"
												required
												value={this.state.item}
												onChange={this.onItemChange}
												placeholder="Choose an Item"
											>
												<option value="item1">Item #1</option>
												<option value="item2">Item #2</option>
												<option value="item3">Item #3</option>
											</Dropdown> */}
							{/* </FormGroup> */}
							{/* </Col> */}
							{/* </Row> */}
							<Row>
								<Col
									xs={9}
									className="mx-auto my-2 text-center"
								>
									<FormGroup>
										<DatePicker
											selected={this.state.date}
											onChange={(date) =>
												this.onDateChange(date)
											}
											placeholderText="Choose a Date"
											className=" form-box"
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
									md={8}
									className="mx-auto my-2 text-center"
								>
									<Button className="order-button col-12 col-md-8">
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
