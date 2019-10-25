import React from 'react';

import { Typography } from '@material-ui/core';

import { Box } from 'grommet';

import Rating from '../Rating'
import Contact from '../Contact'
import Address from '../Address'

const RestaurantCard = (props) => {
	return(
		
		<Box 
			direction="row" 
			pad="small"
			round="medium"

			border={{ color: 'black', size: 'small' }}
		>

			<Box direction="column">
						
						<Box>
						<Typography variant="body1" gutterBottom>
							{props.data.name}
						</Typography>
						</Box>
						
						<Box>
						<Rating rating={props.data.rating} />
						</Box>
			</Box>


			<Box direction="column">
					<Box>
					<Contact contact={props.data.contact} />
					</Box>

					<Box>
					<Address data={props.data.address} />
					</Box>
			</Box>

		</Box>
	)
}

export default RestaurantCard;