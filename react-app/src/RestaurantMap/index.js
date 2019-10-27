import React from 'react'
import ReactMapGL from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import {Box} from 'grommet'

const viewport = {
	latitude: 37.7,
	longitude: -122.45,
	zoom: 13
}

const Map = () => {
	return (
		<Box pad="small" fill>
			<ReactMapGL 
				width="100vw"
				height="100vh"
				mapStyle="mapbox://styles/mapbox/streets-v9"
				{...viewport}
				mapboxApiAccessToken = "pk.eyJ1IjoidnphbGJlcnRvIiwiYSI6ImNrMjllZzNjdTFtZXMzZXRjaHJ6Z2NlNW4ifQ.0DS64cOS3tH51tPaajudew"
			>

			</ReactMapGL>
		</Box>
	);
}

export default Map;