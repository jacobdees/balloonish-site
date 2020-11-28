import React from 'react';
import Feed from 'react-instagram-authless-feed';

export default class Footer extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row d-flex footer align-items-center">
					{/* <h2 className="text-center">Follow us on Instagram</h2> */}
					{/* <Feed
						userName="balloon.ish"
						className="Feed col-12 ig-feed"
						classNameLoading="Loading"
						limit="4"
						
					/> */}
				</div>
			</div>
		);
	}
}
