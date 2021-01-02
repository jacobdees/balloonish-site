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
import { Fade } from 'react-reveal';
import ProductPortal from './ProductPortal';
import PurchasePage from '../components/PurchasePage';

const IndividualProducts = (props) => {
	return (
		<div className="item-cards m-5 col-lg-3 col-10 w-100">
			<Card
				className="item-cards"
				onClick={props.onClick}
				selectedModal={props.id}
			>
				<CardBody
					className="row d-flex justify-content-center align-items-end item-card-images"
					style={{ backgroundImage: `url(${props.img})` }}
				>
					<Fade
						bottom
						delay={250}
						duration={500}
						cascade
						className="row d-flex align-items-end border border-danger"
					>
						<CardTitle className="item-card-title col-12 text-center">
							{props.title} ({props.type})
						</CardTitle>
					</Fade>
				</CardBody>
			</Card>
		</div>
	);
};

export default IndividualProducts;
