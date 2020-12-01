import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MenuItems from './MenuItems';

export default class ProductPortal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: props.modalOpen,
			selectedModal: 3,
		};
	}
	render() {
		return (
			<div>
				<div>
					{MenuItems.MenuItems.filter(
						(item) => item.id == this.state.selectedModal
					).map((filteredItem) => (
						<Modal
							isOpen={this.state.modalOpen}
							toggle={this.props.handleClose}
							key={filteredItem.id}
						>
							<ModalHeader toggle={this.props.handleClose}>
								{filteredItem.item}
							</ModalHeader>
							<ModalBody>
								{filteredItem.img}
								{filteredItem.type}
								{filteredItem.size}
								{filteredItem.colors}
								{filteredItem.price}
								{filteredItem.details}
							</ModalBody>
							<ModalFooter>
								<Button
									color="primary"
									onClick={this.props.handleClose}
								>
									Order
								</Button>{' '}
								<Button
									color="secondary"
									onClick={this.props.handleClose}
								>
									Go Back
								</Button>
							</ModalFooter>
						</Modal>
					))}
				</div>
			</div>
		);
	}
}
