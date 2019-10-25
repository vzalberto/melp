import React from 'react';

import {Box} from 'grommet';

const Rating = (props) => {
	return(
		
		<Box gridArea="restaurantRating">
					<p>{props.rating + 1} / 5 </p>
		</Box>
	)
}

export default Rating;