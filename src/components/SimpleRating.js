import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
	const [value, setValue] = React.useState(2);

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
					value={null}
					size="large"
					precision={0.5}
				/>
			</Box>
		</div>
	);
}
