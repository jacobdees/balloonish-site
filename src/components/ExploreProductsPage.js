import React from 'react';
import IndividualProducts from './IndividualProducts';

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
		const menuItems = [
			{
				id: 1,
				item: 'Simple Garland',
				type: 'Outdoor',
				size: 'Garland (8ft)',
				colors: 3,
				price: 115,
				details: null,
			},
			{
				id: 2,
				item: 'Simple+ Garland',
				type: 'Outdoor',
				size: 'Garland (10ft)',
				colors: 4,
				price: 125,
				details: 'Can be split upon request',
			},
			{
				id: 3,
				item: 'Complex Garland',
				type: 'Outdoor',
				size: 'Garland (12ft)',
				colors: 5,
				price: 155,
				details: 'Includes 3 foil balloons',
			},
			{
				id: 4,
				item: 'Simple Garland',
				type: 'Indoor',
				size: 'Garland (8ft)',
				colors: 3,
				price: 110,
				details: null,
			},
			{
				id: 5,
				item: 'Simple+ Garland',
				type: 'Indoor',
				size: 'Garland (10ft)',
				colors: 4,
				price: 120,
				details: 'Can be split upon request',
			},
			{
				id: 6,
				item: 'Complex Garland',
				type: 'Indoor',
				size: 'Garland (12ft)',
				colors: 5,
				price: 150,
				details: 'Includes 3 foil balloons',
			},
			{
				id: 7,
				item: 'Balloon Wall',
				type: 'Small',
				size: 'Wall (8ft x 8ft)',
				colors: 4,
				price: 300,
				details: null,
			},
			{
				id: 8,
				item: 'Balloon Wall',
				type: 'Large',
				size: 'Wall (10ft x 10ft)',
				colors: 5,
				price: 450,
				details: null,
			},
		];
		return (
			<div className="container">
				<div className="">
					<h2 className="col-12 text-center display-4">
						What will you celebrate today?
					</h2>
					<div className="">
						<div className="items-deck">
							{menuItems.map((m) => (
								<IndividualProducts
									// className="row"
									key={m.id}
									title={m.item}
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
