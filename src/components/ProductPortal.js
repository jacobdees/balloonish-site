import React from 'react';
import {
	Button,
	Card,
	CardBody,
	CardTitle,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
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

	onOrderButtonClick = (e) => {
		// e.preventDefault();
		this.props.onClick();
	};
	render() {
		return (
			<div>
				{this.changeSelectedModal}
				{MenuItems.MenuItems.filter(
					(item) => item.id == this.state.selectedModal
				).map((filteredItem) => (
					<Modal
						isOpen={this.state.modalOpen}
						toggle={this.props.handleClose}
						key={filteredItem.id}
						centered
						size="md"
						className=""
					>
						<div
							className="row d-flex justify-content-center"
							// style={{
							// 	backgroundImage: `url(${filteredItem.img})`,
							// }}
						>
							{/* <ModalHeader className="modal-title text-center">
								{filteredItem.item} {filteredItem.size}
							</ModalHeader> */}
							{/* <ModalBody className="container d-flex"> */}
							<div className="item-cards w-100 h-100">
								<Card
									className="item-cards"
									// onClick={props.onClick}
									// selectedModal={props.id}
								>
									<CardBody
										className="row d-flex justify-content-center align-items-center item-card-images blur"
										style={{
											backgroundImage: `url(${filteredItem.img})`,
											cursor: 'auto',
										}}
									>
										{/* <Flip
												top
												className="row d-flex align-items-end border border-danger"
											> */}
										{/* <span className="blur"> */}
										<CardTitle className="item-card-title col-10 text-center">
											<h1>
												{filteredItem.item}{' '}
												{filteredItem.size}
											</h1>
											<h1 className="col-12 h-25">
												Up to {filteredItem.colors}{' '}
												colors
											</h1>
											<h1 className="col-12 h-25">
												${filteredItem.price}
											</h1>
											<h2 className="col-12 h-25">
												{filteredItem.details}
											</h2>
											<Button
												className="my-auto mr-5 order-button"
												onClick={this.props.onClick}
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
										</CardTitle>
										{/* </span> */}
										{/* </Flip> */}
									</CardBody>
								</Card>
							</div>
							{/* <div className="row px-3">
									<img
										src={filteredItem.img}
										className="product-portal-image"
									/>
								</div>
								<div className="row px-4 h-100 text-center align-self-center justify-content-right">
									<h1 className="col-12 h-25">
										Up to {filteredItem.colors} colors
									</h1>
									<h1 className="col-12 h-25">
										${filteredItem.price}
									</h1>
									<h4 className="col-12 h-25">
										{filteredItem.details}
									</h4>
								</div> */}
							{/* </ModalBody> */}
							{/* <ModalFooter>
								<Button
									className="my-auto mr-5 order-button"
									onClick={this.props.onClick}
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
							</ModalFooter> */}
						</div>
					</Modal>
				))}
			</div>
		);
	}
}
