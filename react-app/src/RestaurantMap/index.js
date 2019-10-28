import React, { useContext, useState } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import {Box} from 'grommet'
import { Cafeteria, Location } from 'grommet-icons'

import Context from '../context'

const navigationControl = {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "1em"
  }

const INITIAL_VIEWPORT = {
	latitude: 19.4320281,
	longitude: -99.1336334,
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
				mapStyle="mapbox://styles/mapbox/streets-v9"
				{...viewport}
				mapboxApiAccessToken = "pk.eyJ1IjoidnphbGJlcnRvIiwiYSI6ImNrMjllZzNjdTFtZXMzZXRjaHJ6Z2NlNW4ifQ.0DS64cOS3tH51tPaajudew"
				onViewportChange={(viewport)=>setViewport(viewport)}
			>

				<div style={navigationControl}>
					<NavigationControl onViewportChange={(viewport)=>setViewport(viewport)} />
				</div>

			<Marker latitude={state.lat} longitude={state.lng} offsetLeft={-20} offsetTop={-10}>
			    <Location />
			 </Marker>

			 {state.restaurants[0] && (
			 	state.restaurants.map(res=>{
			 		return (
						<Marker latitude={res.address.location.lat} longitude={res.address.location.lng} offsetLeft={-20} offsetTop={-10}>
						    <Cafeteria/>
						 </Marker>
			 		)
			 	})
			 ) }
			</ReactMapGL>
		</Box>
	);
}

export default RestaurantMap;