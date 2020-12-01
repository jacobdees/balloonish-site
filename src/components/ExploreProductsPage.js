import React from 'react';
import IndividualProducts from './IndividualProducts';
import MenuItems from './MenuItems';
import ProductPortal from './ProductPortal';

export default class ExploreProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
			selectedModal: null,
		};
	}
	openModal = (id) => {
		this.setState(() => ({ modalOpen: true }));
	};
	handleClose = () => {
		this.setState(() => ({ modalOpen: false }));
	};
	render() {
		return (
			<div className="container-fluid w-100 items-deck">
				<div className="">
					<h2 className="col-12 text-center item-deck-title">
						What will you celebrate today?
					</h2>
					<div className="container-fluid">
						<div className="row d-flex justify-content-around">
							{/* {console.log(MenuItems.MenuItems)} */}
							{/* {console.log(menuItems)} */}
							{MenuItems.MenuItems.map((m) => (
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
									onClick={this.openModal}
									selectedModal={() =>
										this.setState(() => ({
											selectedModal: m.id,
										}))
									}
								/>
							))}
							{this.state.modalOpen ? (
								<ProductPortal
									modalOpen={this.state.modalOpen}
									handleClose={this.handleClose}
									selectedModal={this.state.selectedModal}
								/>
							) : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
