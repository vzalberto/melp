import React from 'react';

import {Box} from 'grommet';

const Address = (props) => {
	return(
		
		<Box direction="row">
			{props.data.street}
			<br />
			{props.data.city},&nbsp;
			{props.data.state}
		</Box>
	)
}

export default Address;