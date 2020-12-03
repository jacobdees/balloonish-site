import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MenuItems from './MenuItems';

export default class ProductPortal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: props.modalOpen,
			selectedModal: props.selectedModal,
		};
	}
	changeSelectedModal(id) {
		this.setState(() => ({ selectedModal: id }));
	}
	render() {
		return (
			<div>
				<div>
					{this.changeSelectedModal}
					{MenuItems.MenuItems.filter(
						(item) => item.id == this.state.selectedModal
					).map((filteredItem) => (
						<div className="order-modal-body">
							<Modal
								isOpen={this.state.modalOpen}
								toggle={this.props.handleClose}
								key={filteredItem.id}
								centered
								size="md"
								className=""
							>
								<div
									className="order-modal-body"
									// style={{
									// 	backgroundImage: `url(${filteredItem.img})`,
									// }}
								>
									<ModalHeader className="modal-title">
										{filteredItem.item} {filteredItem.size}
									</ModalHeader>
									<ModalBody className="">
										{/* <img
											src={filteredItem.img}
											className="product-portal-image"
										/> */}
										{/* <h1>
											{filteredItem.item} {filteredItem.size}
										</h1> */}
										<h2>
											Up to {filteredItem.colors} colors
										</h2>
										<h2>${filteredItem.price}</h2>
										<h4>{filteredItem.details}</h4>
									</ModalBody>
									<ModalFooter>
										<Button
											className="my-auto mr-5 order-button"
											onClick={
												(this.props.onClick,
												this.props.handleClose)
											}
											item={`${filteredItem.item} ${filteredItem.type}`}
										>
											Order Now
										</Button>{' '}
										<Button
											onClick={this.props.handleClose}
											className="cancel-button"
										>
											Go Back
										</Button>
									</ModalFooter>
								</div>
							</Modal>
						</div>
					))}
				</div>
			</div>
		);
	}
}
