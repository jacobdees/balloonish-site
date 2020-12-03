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
import ProductPortal from './ProductPortal';
import PurchasePage from '../components/PurchasePage';

const IndividualProducts = (props) => {
	return (
		<Card
			className="item-cards m-5 col-lg-3 col-10 w-100"
			onClick={props.onClick}
			selectedModal={props.id}
		>
			{/* <CardImg src={myPicture} /> */}
			{/* <CardImg top width="100%" src={props.img} alt="Card image cap" /> */}
			<CardBody
				className="row d-flex align-items-end item-card-images"
				style={{ backgroundImage: `url(${props.img})` }}
			>
				<CardTitle className="item-card-title col-12 text-center">
					{props.title} ({props.type})
				</CardTitle>
				{/* <CardSubtitle>${props.price}</CardSubtitle>
				<CardText className="col-12">{props.size}</CardText>
				<CardText className="col-12">
					Up to {props.colors} colors
				</CardText>
				<CardText className="card-details">{props.details}</CardText> */}
				{/* <Button
						className="my-auto mr-5 order-button"
						onClick={this.props.onClick}
					>
						Order Now
					</Button> */}
				{/* <Button>More Info</Button> */}
			</CardBody>
			{/* <Button
				className="order-button"
				onClick={props.onClick}
				selectedModal={props.id}
			>
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
