import React from 'react';

import { Anchor, Box } from 'grommet';

import { Domain, Mail, Phone } from 'grommet-icons'

const Contact = (props) => {
	return(

		<Box 
		gridArea="restaurantContact"
		align="end"
		>
			<Box direction="row">
				<Mail />

				{props.contact.email}
					
			</Box>
			
			<Box direction="row">
				<Phone />

				{props.contact.phone}
			</Box>

			<Box direction="row">
				<Domain />

				
					{props.contact.site}
				
			</Box>

		</Box>
	)
}

export default Contact;