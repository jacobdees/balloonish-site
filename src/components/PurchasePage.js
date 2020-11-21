import React from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-modal';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
			startDate: null,
			setStartDate: null,
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
		const tel = e.target.value;
		this.setState(() => ({ tel }));
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};

	onPrefChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ pref }));
	};

	onItemChange = (e) => {
		const item = e.target.value;
		this.setState(() => ({ item }));
	};

	onDateChange = (e) => {
		// const date = e.target.value;
		this.setState(() => ({ startDate: e }));
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
				<Button className="btn-danger" onClick={this.props.onClick}>
					Order Here
				</Button>
				<Modal
					isOpen={this.props.modalOpen}
					onRequestClose={this.props.handleClose}
				>
					<h1>Purchase Information</h1>
					<form onSubmit={this.onSubmit}>
						<input
							type="text"
							id="fName"
							autoFocus
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
							type="tel"
							id="tel"
							placeholder="Phone"
							value={this.state.tel}
							onChange={this.onTelChange}
						></input>
						<input
							type="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.onEmailChange}
						></input>
						{/* <label for="pref">Preferred Method of Contact: </label>
						<div onChange={this.onPrefChange}>
							<input type="radio" name="pref" value="phone">
								Phone
							</input>
							<input type="radio" name="pref" value="email">
								Email
							</input>
						</div> */}
						<label for="item">Choose an Item: </label>
						<select
							id="item"
							required
							value={this.state.item}
							onChange={this.onItemChange}
							placeholder="Choose an Item"
						>
							<option value="item1">Item #1</option>
							<option value="item2">Item #2</option>
							<option value="item3">Item #3</option>
						</select>
						<DatePicker
							selected={this.state.startDate}
							onChange={(date) => this.onDateChange(date)}
							placeholderText="Choose a Date"
						/>
						{/* <SingleDatePicker
							date={this.state.date}
							onDateChange={this.onDateChange}
							focused={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							id="date"
						/> */}
						<label for="note">Note: </label>
						<textarea
							type="text"
							id="note"
							placeholder="(Optional)"
							value={this.state.review}
							onChange={this.onNoteChange}
						></textarea>
						<button>Submit</button>
					</form>
				</Modal>
			</div>
		);
	}
}
