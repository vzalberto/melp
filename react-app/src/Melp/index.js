import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

import { Anchor, Grid, Grommet, Box, Text } from 'grommet';

import RestaurantList from '../RestaurantList'
import RestaurantMap from '../RestaurantMap'

import RatingDistributionChart from '../RatingDistributionChart'
import FilterControls from '../FilterControls'
import Context from '../context'
import Reducer from '../reducer'

const Melp = () => {
const initialState = useContext(Context);
const [state, dispatch] = useReducer(Reducer, initialState);

const [avg, setAvg] = useState(0);
const [sigma, setSigma] = useState(0);

//This block performs the initial data load
{
const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'

  async function fetchData() {
    const res = await axios(proxyUrl + targetUrl);

    dispatch ({type: 'UPDATE_RESTAURANTS', payload: res.data})
  }

  useEffect(() => {
    fetchData();
  }, []);
}

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
        <RestaurantList />
      </Box>

      <Box gridArea="main" background="light-2">
          <FilterControls />

          <RestaurantMap />

      </Box>
    </Grid>  

      </Grommet>
    </Context.Provider>
  );
}

export default Melp;
