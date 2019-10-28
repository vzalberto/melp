import React from 'react';

import { Box, Text } from 'grommet';

const AverageRating = (props) => {
	return(

		    <Box pad="medium" background="brand">
		      <Text size="small">Average rating: {props.data}</Text>
		    </Box>

	)
}

export default AverageRating;