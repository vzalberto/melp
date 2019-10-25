import React from 'react';

import {Box} from 'grommet';

import {Star} from 'grommet-icons'

const Rating = (props) => {
	return(
		
		<Box direction="column">
			<Box direction="row">
					<p>{props.rating} / 5 </p>
					<Star />
			</Box>
		</Box>
	)
}

export default Rating;