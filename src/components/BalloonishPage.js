import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import PurchasePage from './PurchasePage';
import AboutPage from './AboutPage';
import ReviewForm from './ReviewForm';
import ReviewsPage from './ReviewsPage';
import ExploreProductsPage from './ExploreProductsPage';
import Footer from './Footer';

export default class BalloonishPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
		};
	}
	openModal = () => {
		this.setState(() => ({ modalOpen: true }));
	};
	handleClose = () => {
		this.setState(() => ({ modalOpen: false }));
	};
	render() {
		return (
			<div>
				<Header
					onClick={this.openModal}
					modalOpen={this.state.modalOpen}
					handleClose={this.handleClose}
				/>
				<Carousel />
				<ReviewsPage />
				<ExploreProductsPage />
				<PurchasePage
					onClick={this.openModal}
					modalOpen={this.state.modalOpen}
					handleClose={this.handleClose}
				/>
				<AboutPage />
				<ReviewForm />
				<Footer />
			</div>
		);
	}
}
