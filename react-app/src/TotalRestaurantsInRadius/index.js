import React from 'react';

import { Box, Text } from 'grommet';

const TotalRestaurantsInRadius = (props) => {
	return(

		    <Box pad="medium" background="brand">
		      <Text size="small">Total restaurants in radius: {props.total}</Text>
		    </Box>

	)
}

export default TotalRestaurantsInRadius;