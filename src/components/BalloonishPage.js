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
import picture from '../images/baby.jpg';

class PurchasePage extends React.Component {
	render() {
		return (
			<div>
				<h2>How to buy our balloons!</h2>
			</div>
		);
	}
}

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<h2>My Story</h2>
				<p>
					Here's where a bio would go. This would also be a good place
					to put a quick blurb or mission statement about the company.
				</p>
			</div>
		);
	}
}

const IndividualProducts = (props) => {
	return (
		<div>
			<Card>
				<CardImg src="./images/baby.jpg" />
				<CardBody>
					<CardTitle>Item #1</CardTitle>
					<CardSubtitle>Price</CardSubtitle>
					<CardText>Description of Item #1</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

class ExploreProducts extends React.Component {
	render() {
		return (
			<div>
				<h2>What will you celebrate today?</h2>
			</div>
		);
	}
}

export default class BalloonishPage extends React.Component {
	render() {
		return (
			<div>
				<h1>balloon.ish</h1>
				<IndividualProducts />
				<AboutPage />
				<PurchasePage />
			</div>
		);
	}
}
