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
import Carousel from './Carousel';
import PurchasePage from './PurchasePage';
import AboutPage from './AboutPage';
import ReviewForm from './ReviewForm';
import ReviewsPage from './ReviewsPage';

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

class ExploreProducts extends React.Component {
	render() {
		const menuItems = [
			{
				id: 1,
				item: 'Item #1',
			},
			{
				id: 2,
				item: 'Item #2',
			},
			{
				id: 3,
				item: 'Item #3',
			},
		];
		return (
			<div>
				<h2>What will you celebrate today?</h2>
				{menuItems.map((m) => (
					<IndividualProducts title={m.item} key={m.id} />
				))}
			</div>
		);
	}
}

export default class BalloonishPage extends React.Component {
	render() {
		return (
			<div>
				<h1>balloon.ish</h1>
				<Carousel />
				<ReviewsPage />
				<ExploreProducts />
				<PurchasePage />
				<AboutPage />
				<ReviewForm />
			</div>
		);
	}
}
