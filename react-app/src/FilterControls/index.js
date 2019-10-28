import React, {useContext} from 'react'
import { Box, Button, TextInput } from 'grommet'

import Context from '../context'


const FilterControls = () => {

	const {state} = useContext(Context)
	const {dispatch} = useContext(Context);

	const latUpdate = (event)=>{dispatch ({type: "UPDATE_LATITUDE", payload: event.target.value})}
	const lngUpdate = (event)=>{dispatch ({type: "UPDATE_LONGITUDE", payload: event.target.value})}
	const radiusUpdate = (event)=>{dispatch ({type: "UPDATE_RADIUS", payload: event.target.value})}

	return (
		<div>
		<TextInput 
			placeholder={`latitude: ${state.lat}`}
			onChange={latUpdate}
		/>
		<TextInput 
			placeholder={`latitude: ${state.lng}`}
			onChange={lngUpdate}
		/>
		<TextInput 
			placeholder={`radius: ${state.radius}`}
			onChange={radiusUpdate}
		/>
		<Button label="Filter by radius" onClick={ () => dispatch ({type: "FILTER_BY_RADIUS"}) } />
		</div>
	);
}

export default FilterControls;