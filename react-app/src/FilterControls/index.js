import React, {useContext} from 'react'
import { Box, Button, Text, TextInput } from 'grommet'

import Context from '../context'


const FilterControls = () => {

	const {state} = useContext(Context)
	const {dispatch} = useContext(Context);

	const radiusUpdate = (event)=>{dispatch ({type: "UPDATE_RADIUS", payload: event.target.value})}

	return (
		<Box direction="row">
		<Box basis="small">
		<Text>latitude: {state.lat}
		</Text>
		
		</Box>

		<Box basis="small">
		<Text>latitude: {state.lng}
		</Text>
		</Box>

		<Box basis="small">

		<TextInput 
			placeholder={"(radius in meters)"}
			onChange={radiusUpdate}
		/>
		</Box>

		<Button label="Filter" onClick={ () => dispatch ({type: "FILTER_BY_RADIUS"}) } />
		</Box>
	);
}

export default FilterControls;