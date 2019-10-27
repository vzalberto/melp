import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

import { Anchor, Grid, Grommet, Box, Text } from 'grommet';

import RestaurantList from '../RestaurantList'

import RestaurantMap from '../RestaurantMap'

import RatingDistributionChart from '../RatingDistributionChart'
import AverageRatingLabel from '../AverageRatingLabel'
import StandardDeviationLabel from '../StandardDeviationLabel'
import TotalRestaurantsInRadius from '../TotalRestaurantsInRadius'
import FilterControls from '../FilterControls'
import Context from '../context'
import Reducer from '../reducer'

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
  return d;
}

// Converts numeric degrees to radians
function toRad(Value)
{
    return Value * Math.PI / 180;
}

const Melp = () => {
const initialState = useContext(Context);
const [state, dispatch] = useReducer(Reducer, initialState);

const [restaurants, setRestaurants] = useState([]);
const [avg, setAvg] = useState(0);
const [sigma, setSigma] = useState(0);

const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'

  async function fetchData() {
    const res = await axios(proxyUrl + targetUrl);



    setRestaurants(res.data.filter(el=>calcCrow(el.address.location, {lat: state.lat, lng: state.lng}) <= state.radius))
  }

  useEffect(() => {
    fetchData();
  }, []);

  //This hook calculates the average of current restaurants
  useEffect(()=>{
    let sum = 0;
    const m = restaurants.length

    for (let i = restaurants.length - 1; i >= 0; i--) {
      sum += restaurants[i].rating 
    }

    setAvg(sum/m)

  }, [restaurants])

  //This handles std deviation, depends on the average being calculated first.
  useEffect(()=>{
    let sum = 0;
    const m = restaurants.length

    for (let i = restaurants.length - 1; i >= 0; i--) {
      sum += Math.pow((parseFloat(restaurants[i].rating) - parseFloat(avg)), 2)
    }

    console.log(sum)

    setSigma(Math.sqrt(sum/(m-1)).toFixed(3))
  }, [avg])

  const theme = {
    global: {
      font: {
        family: 'Inconsolata',
        size: '14px',
        height: '20px',
      },
    },
  }

  return (
    <Context.Provider value={{state, dispatch}} >
      <Grommet full theme={theme}>
        <Grid
          rows={['xxsmall', 'large']}
          columns={['1/3', '2/3']}
          gap="small"
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
    >
      <Box gridArea="header" background="brand">
        <Text>Melp</Text>
        <Anchor href="https://github.com/vzalberto/melp" primary label="View on Github" target="_blank" />
      </Box>

      <Box gridArea="nav">
        <RestaurantList restaurants={restaurants} />
      </Box>

      <Box gridArea="main" background="light-2">

          <FilterControls />
          <TotalRestaurantsInRadius total={restaurants.length}/>
          <AverageRatingLabel data={avg}/>
          <StandardDeviationLabel sigma={sigma}/>
          <RestaurantMap />

      </Box>
    </Grid>  

      </Grommet>
    </Context.Provider>
  );
}

export default Melp;
