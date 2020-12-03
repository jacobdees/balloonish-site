import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Carousel from './Carousel';
import ProductPortal from './ProductPortal';
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
			scrollClass: '',
			item: props.item,
		};
	}
	openModal = (e) => {
		e.preventDefault();
		this.setState(() => ({ modalOpen: true }));
	};
	handleClose = () => {
		this.setState(() => ({ modalOpen: false }));
	};

	render() {
		return (
			<div className="page-container">
				{/* <Carousel /> */}
				<Banner />
				<Header
					onClick={this.openModal}
					modalOpen={this.state.modalOpen}
					handleClose={this.handleClose}
					className=""
				/>
				<ReviewsPage />
				<ExploreProductsPage
					onClick={this.openModal}
					modalOpen={this.state.modalOpen}
					handleClose={this.handleClose}
				/>
				<div className="">
					<PurchasePage
						onClick={this.openModal}
						modalOpen={this.state.modalOpen}
						handleClose={this.handleClose}
					/>
				</div>
				<AboutPage />
				<ReviewForm />
				{/* <Footer /> */}
			</div>
		);
	}
}
