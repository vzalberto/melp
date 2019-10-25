import React, { useState, useEffect } from 'react';
import RestaurantCard from '../RestaurantCard';

import { Box, Button, InfiniteScroll } from 'grommet';
import { Ascend, Descend } from 'grommet-icons';

const RestaurantList = (props) => {

	const sortByKey = (array, key, order) => {
	    return array.sort((a, b) => {
	        const x = a[key]; const y = b[key];
	        if (order)
	        	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    	else
	    		return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	    });
	}

	const [list, setList] = useState(props.restaurants);

	const [name_asc, setNameAsc] = useState(true);
	const [rating_asc, setRatingAsc] = useState(true);

	useEffect(()=>{
		setList(props.restaurants)
	}, [props]);

	useEffect(() => {
		console.log('hello from useEffect')
		console.log(list)
	}, [list]);

	return(
		<Box direction="column">
			<Box direction="row">

				<Box>
					<Button
					  	label="A-Z"
					  	icon={ name_asc ? (<Ascend/>) : (<Descend/>)}

					  onClick={() => {
					  	const arr = sortByKey([...props.restaurants], "name", name_asc)
					  	setNameAsc(!name_asc)
					  	setList(arr)
					  }}

					/>
				</Box>

				<Box>
					<Button
					  	label="Rating"
					  	icon={ rating_asc ? (<Ascend/>) : (<Descend/>)}

					  onClick={() => {
					  	const arr = sortByKey([...props.restaurants], "rating", rating_asc)
						setRatingAsc(!rating_asc)
					  	setList(arr)

					  }}

					/>

				</Box>
			</Box>

			<br /><br /><br />
			
			<Box direction="column" pad="medium">
				{list.map((item, key)=>(<RestaurantCard data={item} key={item.id}/>))}
			</Box>

		</Box>
	)
}

export default RestaurantList;