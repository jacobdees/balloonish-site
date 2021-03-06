import React from 'react';
import { Motion, spring } from 'react-motion';
// import ReactCSSTransitionGroup from 'react-transition-group';
// import { Transition } from 'react-transition-group';
// import { Fade } from 'react-reveal';

export default class Banner extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="banner-img1 row d-flex justify-content-center">
					<Motion
						defaultStyle={{ y: -200, opacity: 0 }}
						style={{
							y: spring(0, { stiffness: 75, damping: 20 }),
							opacity: spring(10, {
								stiffness: 100,
								damping: 40,
							}),
						}}
					>
						{(interpolatingStyle) => (
							<img
								style={{
									transform: `translateY(${interpolatingStyle.y}px)`,
									opacity: interpolatingStyle.opacity,
								}}
								key={1}
								src="/images/logo-removebg-preview.png"
								className="banner-logo align-self-between"
							/>
						)}
					</Motion>
				</div>
			</div>
		);
	}
}
