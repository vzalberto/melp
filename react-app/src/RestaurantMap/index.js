import React, { useContext, useState } from 'react'
import ReactMapGL, { NavigationControl } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import {Box} from 'grommet'

import Context from '../context'

const navigationControl = {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "1em"
  }

const INITIAL_VIEWPORT = {
	latitude: 19.4183786,
	longitude: -99.189842,
	zoom: 15
}
const RestaurantMap = () => {
	const {state, dispatch} = useContext(Context);
	const [viewport, setViewport] = useState(INITIAL_VIEWPORT);


	const handleMapClick = ({lngLat, leftButton}) => {
		if(!leftButton) return;
		const [lng, lat] = lngLat;

		dispatch ({type: "UPDATE_LONGITUDE" , payload: lng})

		dispatch ({type: "UPDATE_LATITUDE", payload: lat})
	}

	return (
		<Box pad="small" fill>
			<ReactMapGL 
				onClick={handleMapClick}
				width="100vw"
				height="100vh"
				mapStyle="mapbox://styles/mapbox/satellite-v9"
				{...viewport}
				mapboxApiAccessToken = "pk.eyJ1IjoidnphbGJlcnRvIiwiYSI6ImNrMjllZzNjdTFtZXMzZXRjaHJ6Z2NlNW4ifQ.0DS64cOS3tH51tPaajudew"
				onViewportChange={(viewport)=>setViewport(viewport)}
			>
			<div style={navigationControl}>
			<NavigationControl onViewportChange={(viewport)=>setViewport(viewport)} />
			</div>
			</ReactMapGL>
		</Box>
	);
}

export default RestaurantMap;