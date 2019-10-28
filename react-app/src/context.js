import { createContext } from 'react';

const Context = createContext({
	lat: 19.4183786,
	lng: -99.189842,
	radius: 0,
	restaurants: []
})

export default Context;