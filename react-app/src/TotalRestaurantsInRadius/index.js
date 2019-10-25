import React from 'react';

import { Box, Text } from 'grommet';

const TotalRestaurantsInRadius = (props) => {
	return(

		    <Box pad="small" background="brand" fill>
		      <Text size="large">Total restaurants in radius: {props.total}</Text>
		    </Box>

	)
}

export default TotalRestaurantsInRadius;