import React from 'react';

import {Box} from 'grommet';

const Rating = (props) => {
	return(
		
		<Box gridArea="restaurantRating" align="end">
					<p>{props.rating} ★</p>
		</Box>
	)
}

export default Rating;