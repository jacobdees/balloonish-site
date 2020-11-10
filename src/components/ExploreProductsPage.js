import React from 'react';
import IndividualProducts from './IndividualProducts';

export default class ExploreProducts extends React.Component {
	render() {
		const menuItems = [
			{
				id: 1,
				item: 'Item #1',
			},
			{
				id: 2,
				item: 'Item #2',
			},
			{
				id: 3,
				item: 'Item #3',
			},
		];
		return (
			<div>
				<h2>What will you celebrate today?</h2>
				{menuItems.map((m) => (
					<IndividualProducts title={m.item} key={m.id} />
				))}
			</div>
		);
	}
}
