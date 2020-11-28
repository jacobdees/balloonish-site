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
	return (
		<Card className="item-cards m-5 col-lg-3 col-10 w-100">
			{/* <CardImg src={myPicture} /> */}
			{/* <CardImg top width="100%" src={props.img} alt="Card image cap" /> */}
			<CardBody
				className="row d-flex align-items-end item-card-images"
				style={{ backgroundImage: `url(${props.img})` }}
			>
				<CardTitle className="item-card-title col-12 text-center">
					{props.title} ({props.type})
				</CardTitle>
				{/* <CardSubtitle>${props.price}</CardSubtitle> */}
				{/* <CardText className="col-12">
					{props.size} - Up to {props.colors} colors
				</CardText> */}
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
