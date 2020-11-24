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
			<div className="">
				{this.state.modalOpen ? null : (
					<Header
						onClick={this.openModal}
						modalOpen={this.state.modalOpen}
						handleClose={this.handleClose}
						className="animate__animated animate__bounceOutUp"
					/>
				)}
				<Carousel />
				<ReviewsPage />
				<ExploreProductsPage
					onClick={this.openModal}
					modalOpen={this.state.modalOpen}
					handleClose={this.handleClose}
				/>
				<div className="container w-75">
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
