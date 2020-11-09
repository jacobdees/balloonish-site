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
import LeaveAReview from './LeaveAReview';

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

class Reviews extends React.Component {
	render() {
		const reviews = [
			{
				id: 1,
				author: 'JD',
				rating: 5,
				text: 'Here is my review of balloon.ish',
			},
			{
				id: 2,
				author: 'IW',
				rating: 3,
				text: "It's OKAY.",
			},
			{
				id: 3,
				author: 'QO',
				rating: 1,
				text: 'Kameron sucks!!!',
			},
		];
		const selectedReview =
			reviews[Math.floor(Math.random() * reviews.length)];
		return (
			<div>
				<h3>Hear what others have to say...</h3>
				<p>{selectedReview.text}</p>
				<p>- {selectedReview.author}</p>
				{/* insert image here */}
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
				<Reviews />
				<ExploreProducts />
				<PurchasePage />
				<AboutPage />
				<LeaveAReview />
			</div>
		);
	}
}
