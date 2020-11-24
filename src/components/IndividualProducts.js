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
	// export default class IndividualProducts extends React.Component {
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
		<Card className="item-cards col-lg-3 m-4">
			{/* <CardImg src={myPicture} /> */}
			<CardBody>
				<CardTitle>
					{props.title}
					<br />({props.type})
				</CardTitle>
				<CardSubtitle>${props.price}</CardSubtitle>
				<CardText>
					{props.size} - Up to {props.colors} colors
				</CardText>
				{/* <CardText>{props.details}</CardText> */}
				{/* <Button>More Info</Button> */}
			</CardBody>
			{/* <Button className="order-button" onClick={props.onClick}>
					Order
				</Button> */}
			{/* <PurchasePage
						onClick={this.openModal}
						modalOpen={this.state.modalOpen}
						handleClose={this.handleClose}
					/> */}
		</Card>
	);
};

export default IndividualProducts;
