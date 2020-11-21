import React from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-modal';

export default class PurchasePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
			error: undefined,
			fName: props.fName,
			lName: props.lName,
			tel: props.tel,
			email: props.email,
			pref: props.pref,
			item: props.item,
			note: props.note,
		};
	}

	openModal = () => {
		this.setState(() => ({ modalOpen: true }));
	};

	handleClose = () => {
		this.setState(() => ({ modalOpen: false }));
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

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		this.handleClose();
	};

	render() {
		return (
			<div>
				<Button className="btn-danger" onClick={this.openModal}>
					Order Here
				</Button>
				<Modal
					isOpen={this.state.modalOpen}
					onRequestClose={this.handleClose}
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
						<label for="pref">Preferred Method of Contact: </label>
						{/* <div onChange={this.onPrefChange}>
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
						<label for="note">Note: </label>
						<input
							type="text"
							id="note"
							placeholder="(Optional)"
							value={this.state.review}
							onChange={this.onNoteChange}
						></input>
						<button>Submit</button>
					</form>
				</Modal>
			</div>
		);
	}
}
