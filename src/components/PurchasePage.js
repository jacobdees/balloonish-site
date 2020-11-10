import React from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-modal';

export default class PurchasePage extends React.Component {
	state = {
		modalOpen: false,
	};

	openModal = () => {
		this.setState(() => ({ modalOpen: true }));
	};

	handleClose = () => {
		this.setState(() => ({ modalOpen: false }));
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
					<form></form>
				</Modal>
			</div>
		);
	}
}
