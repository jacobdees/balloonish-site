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
			<Card className="col-4">
				{/* <CardImg src={myPicture} /> */}
				<CardBody>
					<CardTitle>
						{props.title} ({props.type})
					</CardTitle>
					<CardSubtitle>${props.price}</CardSubtitle>
					<CardText>
						{props.size} - Up to {props.colors} colors
					</CardText>
					<CardText>{props.details}</CardText>
					{/* <Button>More Info</Button> */}
				</CardBody>
			</Card>
		</div>
	);
};

export default IndividualProducts;
