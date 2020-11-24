import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';

const IndividualProducts = (props) => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		modalOpen: false,
	// 	};
	// }
	// openModal = () => {
	// 	this.setState(() => ({ modalOpen: true }));
	// };
	// handleClose = () => {
	// 	this.setState(() => ({ modalOpen: false }));
	// };
	return (
		<div className="">
			<Card className="item-cards">
				{/* <CardImg src={myPicture} /> */}
				<CardBody>
					<CardTitle>
						{props.title} ({props.type})
					</CardTitle>
					<CardSubtitle>${props.price}</CardSubtitle>
					<CardText>
						{props.size} - Up to {props.colors} colors
					</CardText>
					{/* <CardText>{props.details}</CardText> */}
					{/* <Button>More Info</Button> */}
				</CardBody>
				{/* <PurchasePage
						onClick={this.openModal}
						modalOpen={this.state.modalOpen}
						handleClose={this.handleClose}
					/> */}
			</Card>
		</div>
	);
};

export default IndividualProducts;
