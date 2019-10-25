import React from 'react';

import { Box, Grid, Text } from 'grommet';

import Rating from '../Rating'
import Contact from '../Contact'
import Address from '../Address'

const RestaurantCard = (props) => {
	return(
		
		<Grid 
			rows={['xsmall', 'small']}

			columns={['xsmall', 'small']}

			gap="medium"
			areas={[
				{name: 'restaurantName', start: [0,0], end: [1,0]},
				{name: 'restaurantRating', start: [1,0], end: [2,0]},
				{name: 'restaurantAddress', start: [0,1], end: [1,1]},
				{name: 'restaurantContact', start: [1,1], end: [2,1]},
			]}
		>

				<Box gridArea="restaurantName">
						{props.data.name}
				</Box>

				<Address data={props.data.address} />
			
				<Rating rating={props.data.rating} />

				<Contact contact={props.data.contact} />

		</Grid>
	)
}

export default RestaurantCard;