import React from 'react';

import { Box, Text } from 'grommet';

const AverageRating = (props) => {
	return(

		    <Box pad="small" background="brand" fill>
		      <Text size="large">Average rating: {props.data}</Text>
		    </Box>

	)
}

export default AverageRating;