
//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(coords1, coords2)
{
  // var R = 6.371; // km
  var R = 6371000;
  var dLat = toRad(coords2.lat-coords1.lat);
  var dLon = toRad(coords2.lng-coords1.lng);
  var lat1 = toRad(coords1.lat);
  var lat2 = toRad(coords2.lat);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  console.log(d)
  return d;
}

// Converts numeric degrees to radians
function toRad(Value)
{
    return Value * Math.PI / 180;
}

export default function Reducer(state, { type, payload }){
	switch(type){

		case "UPDATE_RESTAURANTS":
			return {
				...state,
				restaurants: payload
			}

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
				radius: parseFloat(payload)
			}

		case "FILTER_BY_RADIUS":
			return {
				...state,
				restaurants: state.restaurants.filter(el=>calcCrow(el.address.location, {lat: state.lat, lng: state.lng}) <= (state.radius))
			}

		default: 
			return state;
	}
}