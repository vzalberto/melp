import React, {useContext} from 'react'
import { Anchor, Box, Button, Text, TextInput } from 'grommet'

import Context from '../context'


const FilterControls = () => {

	const {state} = useContext(Context)
	const {dispatch} = useContext(Context);

	const radiusUpdate = (event)=>{dispatch ({type: "UPDATE_RADIUS", payload: event.target.value})}

	return (
		<Box direction="row">
		<Box basis="small">
		<Text><b>latitude:</b> {state.lat}
		</Text>
		
		</Box>

		<Box basis="small">
		<Text><b>latitude: </b>{state.lng}
		</Text>
		</Box>

		<Box basis="small">

		<TextInput 
			placeholder={state.radius == 0 && "(radius in meters)"}
			onChange={radiusUpdate}
		/>
		</Box>

		<Button label="Filter" onClick={ () => dispatch ({type: "FILTER_BY_RADIUS"}) } />


			<Box align="center">
				{state.filtered && (
					<Anchor label="remove filter [x]" onClick={()=>dispatch({type:'REMOVE_FILTER'})}/>
				)}
			</Box>
		</Box>

	);
}

export default FilterControls;