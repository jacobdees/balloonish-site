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
			<div className="page-background">
				{this.state.modalOpen ? null : (
					<Header
						onClick={this.openModal}
						modalOpen={this.state.modalOpen}
						handleClose={this.handleClose}
					/>
				)}
				<Carousel />
				<ReviewsPage />
				<div className="container">
					<ExploreProductsPage
						onClick={this.openModal}
						modalOpen={this.state.modalOpen}
						handleClose={this.handleClose}
					/>
					<PurchasePage
						onClick={this.openModal}
						modalOpen={this.state.modalOpen}
						handleClose={this.handleClose}
					/>
					<AboutPage />
					<ReviewForm />
				</div>
				<Footer />
			</div>
		);
	}
}
