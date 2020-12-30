import React from 'react';
import { Button } from 'reactstrap';
import IndividualProducts from './IndividualProducts';
import MenuItems from './MenuItems';
import ProductPortal from './ProductPortal';
import { Motion, spring } from 'react-motion';
import { Fade, Slide, Bounce, Flip } from 'react-reveal';

export default class ExploreProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
			selectedModal: null,
			item: props.item,
			isDesktop: false,
			viewLimit: 3,
		};
	}
	openModal = (id) => {
		this.setState((id) => ({ modalOpen: true, selectedModal: id }));
	};
	handleClose = () => {
		this.setState(() => ({ modalOpen: false }));
	};
	changeSelectedModal(id) {
		this.setState(() => ({ selectedModal: id }));
	}

	componentDidMount() {
		this.updatePredicate();
		window.addEventListener('resize', this.updatePredicate);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updatePredicate);
	}

	updatePredicate() {
		this.setState(() => ({ isDesktop: window.innerWidth > 1450 }));
	}

	expandProducts = () => {
		this.setState(() => {
			{
				viewLimit: 10;
			}
		});
	};

	render() {
		return (
			<div className="container-fluid w-100 items-deck">
				<div className="">
					<Slide bottom duration={2000}>
						<h2 className="col-12 text-center item-deck-title">
							What will you celebrate today?
						</h2>
					</Slide>
					<div className="container-fluid">
						<div className="row d-flex justify-content-around">
							{this.state.isDesktop ? (
								MenuItems.MenuItems.map((m) => (
									<IndividualProducts
										// className="row"
										key={m.id}
										title={m.item}
										img={m.img}
										type={m.type}
										size={m.size}
										colors={m.colors}
										price={m.price}
										details={m.details}
										onClick={() => {
											this.setState(() => ({
												modalOpen: true,
												selectedModal: m.id,
											}));
										}}
									/>
								))
							) : (
								<div className="container-fluid">
									<div className="row d-flex justify-content-around">
										{MenuItems.MenuItems.filter(
											(item) =>
												item.id <= this.state.viewLimit
										).map((m) => (
											<IndividualProducts
												// className="row"
												key={m.id}
												title={m.item}
												img={m.img}
												type={m.type}
												size={m.size}
												colors={m.colors}
												price={m.price}
												details={m.details}
												onClick={() => {
													this.setState(() => ({
														modalOpen: true,
														selectedModal: m.id,
													}));
												}}
											/>
										))}
									</div>
									<div className="row d-flex justify-content-around">
										<Button
											className="order-button my-5 col-10"
											onClick={() => {
												this.setState(() => ({
													isDesktop: true,
												}));
											}}
										>
											Show More
										</Button>
									</div>
								</div>
							)}

							{this.state.modalOpen ? (
								<ProductPortal
									modalOpen={this.state.modalOpen}
									handleClose={this.handleClose}
									selectedModal={this.state.selectedModal}
									onClick={this.props.onClick}
								/>
							) : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
