import React from 'react';
import ReactDOM from 'react-dom';
import Melp from './Melp/';
import * as serviceWorker from './serviceWorker';


// import { Illustration, Shape } from 'react-zdog'


// ReactDOM.render(
//   <Illustration>
//     <Shape stroke={20} color="lightblue"  />
//   </Illustration>,
//   document.getElementById('logo')
// )

ReactDOM.render(<Melp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
