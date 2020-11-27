import React from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
// import Button from '@material-ui/core/Button';
import PurchasePage from './PurchasePage';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<div className="container"></div>
				<div className="header fixed-top row d-flex justify-content-around">
					<h1 className="col-sm-3 col-6 ml-sm-5">balloon.ish</h1>
					<Button
						className="my-auto mr-5 order-button"
						onClick={this.props.onClick}
					>
						Order Now
					</Button>
				</div>
			</div>
		);
	}
}
