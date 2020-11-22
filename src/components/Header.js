import React from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
// import Button from '@material-ui/core/Button';
import PurchasePage from './PurchasePage';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header fixed-top row">
				<h1 className="col-8 mx-auto">balloon.ish</h1>
				<Button
					className="my-auto mx-auto order-button"
					onClick={this.props.onClick}
				>
					Order Now
				</Button>
			</div>
		);
	}
}
