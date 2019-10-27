import React from 'react';

import { Box, Text } from 'grommet';

const StandardDeviationLabel = (props) => {
	return(

		    <Box pad="medium" background="brand">
		      <Text size="large">Sigma: {props.sigma}</Text>
		    </Box>

	)
}

export default StandardDeviationLabel;