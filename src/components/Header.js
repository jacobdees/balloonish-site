import React from 'react';
import { Button } from 'reactstrap';
import PurchasePage from './PurchasePage';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>balloon.ish</h1>
				<Button className="btn-danger" onClick={this.props.onClick}>
					Order Now
				</Button>
			</div>
		);
	}
}
