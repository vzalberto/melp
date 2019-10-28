import { createContext } from 'react';

const Context = createContext({
	lat: 19.3117664,
	lng: -98.716323,
	radius: 0,
	restaurants: [],
	aux: [],
	filtered: false
})

export default Context;