import React from 'react';
import Carousel from './Carousel';
import PurchasePage from './PurchasePage';
import AboutPage from './AboutPage';
import ReviewForm from './ReviewForm';
import ReviewsPage from './ReviewsPage';
import ExploreProductsPage from './ExploreProductsPage';

export default class BalloonishPage extends React.Component {
	render() {
		return (
			<div>
				<h1>balloon.ish</h1>
				<Carousel />
				<ReviewsPage />
				<ExploreProductsPage />
				<PurchasePage />
				<AboutPage />
				<ReviewForm />
			</div>
		);
	}
}
