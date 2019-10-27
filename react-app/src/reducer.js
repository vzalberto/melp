export default function Reducer(state, { type, payload }){
	switch(type){

		case "UPDATE_LATITUDE":
			return {
				...state,
				lat: payload
			}

		case "UPDATE_LONGITUDE":
			return {
				...state,
				lng: payload
			}

		case "UPDATE_RADIUS":

			return{
				...state,
				radius: payload
			}

		default: 
			return state;
	}
}