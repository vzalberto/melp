import React, { useState, useContext } from 'react';

import RestaurantCard from '../RestaurantCard';

import AverageRatingLabel from '../AverageRatingLabel'
import StandardDeviationLabel from '../StandardDeviationLabel'
import TotalRestaurantsInRadius from '../TotalRestaurantsInRadius'

import { Anchor, Box, Button, InfiniteScroll } from 'grommet';
import { Ascend, Descend } from 'grommet-icons';

import Context from '../context'

const RestaurantList = (props) => {

	const {state, dispatch} = useContext(Context);

	const sortByKey = (array, key, order) => {
	    return array.sort((a, b) => {
	        const x = a[key]; const y = b[key];
	        if (order)
	        	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    	else
	    		return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	    });
	}

	const [name_asc, setNameAsc] = useState(true);
	const [rating_asc, setRatingAsc] = useState(true);

	return(
		<Box direction="column" gap="xlarge" >
			<Box direction="row" gap="medium" pad="large" justifiy="center"> 
				<Box>
					<Button
					  	label="A-Z"
					  	icon={ name_asc ? (<Ascend/>) : (<Descend/>)}

					  onClick={() => {
					  	const arr = sortByKey([...state.restaurants], "name", name_asc);
					  	setNameAsc(!name_asc);
					  	dispatch ({type: "UPDATE_RESTAURANTS", payload: arr});
					  }}

					/>
				</Box>

				<Box>
					<Button
					  	label="Rating"
					  	icon={ rating_asc ? (<Ascend/>) : (<Descend/>)}

					  onClick={() => {
					  	const arr = sortByKey([...state.restaurants], "rating", rating_asc)
						setRatingAsc(!rating_asc)
					  	dispatch ({type: "UPDATE_RESTAURANTS", payload: arr});

					  }}

					/>

				</Box>
			</Box>

		<Box align="center">
				{state.filtered && (
					<Anchor label="remove filter [x]" onClick={()=>dispatch({type:'REMOVE_FILTER'})}/>
				)}
			</Box>

			<Box direction="row">
            <TotalRestaurantsInRadius total={state.restaurants.length}/>
            <AverageRatingLabel data={1}/>
            <StandardDeviationLabel sigma={1}/>
            </Box>

			<Box overflow="auto" pad="small" direction="column">
				<InfiniteScroll items={state.restaurants}>
				 {((item, key)=>(<RestaurantCard data={item} key={item.id}/>))}
				</InfiniteScroll>
			</Box>

		</Box>
	)
}

export default RestaurantList;