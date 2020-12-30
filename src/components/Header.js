import React from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import { Motion, spring } from 'react-motion';
// import Button from '@material-ui/core/Button';
import PurchasePage from './PurchasePage';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<Motion
					defaultStyle={{ y: -200, opacity: 0 }}
					style={{
						y: spring(0, { stiffness: 150, damping: 20 }),
						opacity: spring(10, { stiffness: 100, damping: 40 }),
					}}
				>
					{(style) => (
						<div
							className="header fixed-top row d-flex justify-content-around align-items-center"
							style={{
								transform: `translateY(${style.y}px)`,
								opacity: style.opacity,
							}}
						>
							<h1 className="col-sm-3 col-6 ml-sm-5">
								balloon.ish
							</h1>
							<Button
								className="my-auto mr-5 order-button"
								onClick={this.props.onClick}
							>
								Order Now
							</Button>
						</div>
					)}
				</Motion>
			</div>
		);
	}
}
