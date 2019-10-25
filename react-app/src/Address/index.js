import React from 'react';

import {Box, Text} from 'grommet';

const Address = (props) => {
	return(

		<Box gridArea="restaurantAddress">

			{props.data.street}
			<br />
			{props.data.city},&nbsp;{props.data.state}
			
		</Box>
	)
}

export default Address;