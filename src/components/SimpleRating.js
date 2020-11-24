import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default class SimpleRating extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 5,
			setValue: null,
		};
	}

	render() {
		return (
			<div>
				<Box
					component="fieldset"
					borderColor="transparent"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					{/* <Typography component="legend">Pristine</Typography> */}
					<Rating
						name="pristine"
						value={this.value}
						size="large"
						// precision={0.5}
					/>
				</Box>
			</div>
		);
	}
}
