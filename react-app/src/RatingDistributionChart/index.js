import React from 'react';

import { Box, Distribution, Text } from 'grommet';

const RatingDistributionChart = (props) => {
	return(
		<Box pad="small" background="brand" fill>
		<Text>Rating distribution:</Text>
		<Distribution
		  values={[

		    { rating: 1, value: 20, color: 'light-3' },

		    { rating: 2, value: 22, color: 'accent-1' },
		    { rating: 3, value: 4, color: 'light-3' },
		    { rating: 4, value: 5, color: 'brand' },
		    { rating: 0, value: 10, color: 'brand' },
		  ]}
		>
		  {value => (
		    <Box pad="small" background={value.color} fill>
		      <Text size="large">{value.rating}★: {value.value}%</Text>
		    </Box>
		  )}
</Distribution>
</Box>
	)
}

export default RatingDistributionChart;