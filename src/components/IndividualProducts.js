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
		<div>
			<Card>
				{/* <CardImg src={myPicture} /> */}
				<CardBody>
					<CardTitle>{props.title}</CardTitle>
					<CardSubtitle>Price of {props.title}</CardSubtitle>
					<CardText>Description of {props.title}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default IndividualProducts;
