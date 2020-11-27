import React from 'react';
import IndividualProducts from './IndividualProducts';
import MenuItems from './MenuItems';

export default class ExploreProducts extends React.Component {
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
			<div className="container-fluid w-100">
				<div className="">
					<h2 className="col-12 text-center display-4">
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
									modalOpen={this.state.modalOpen}
									handleClose={this.handleClose}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
