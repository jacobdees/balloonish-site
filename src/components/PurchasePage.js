import React from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-modal';

export default class PurchasePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
			error: undefined,
			lName: props.lName,
			fName: props.fName,
			email: props.email,
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

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};

	onItemChange = (e) => {
		const item = e.target.value;
		this.setState(() => ({ item }));
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
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
					closeTimeoutMS={200}
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
						<input type="tel" id="tel"></input>
						<input
							type="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.onEmailChange}
						></input>
						<label for="item">Choose an Item: </label>
						<select
							id="item"
							required
							value={this.state.item}
							onChange={this.onItemChange}
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
