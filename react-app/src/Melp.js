import React, { useState, useEffect } from "react";
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

import { Grid, Grommet, Box } from 'grommet';

import RestaurantList from './RestaurantList'

const Melp = () => {

const [restaurants, setRestaurants] = useState([]);

const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'

  async function fetchData() {
    const res = await axios(proxyUrl + targetUrl);
    setRestaurants(res.data)
  }

  useEffect(() => {
    fetchData();
  }, []);  

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

  return (

    <Grommet theme={theme}>
    
    <Grid
      rows={['xxsmall', 'xsmall']}
      columns={["1/4", "3/4"]}
      gap="small"
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'nav', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box gridArea="header" background="brand" >
        <Typography variant="h1" component="h2" gutterBottom>
          Melp
        </Typography>
      </Box>
      <Box gridArea="nav" background="light-5">
      <RestaurantList restaurants={restaurants} />
      </Box>
      <Box gridArea="main" background="light-2">
        <h1>Mapa</h1>
      </Box>
    </Grid>
      </Grommet>
  );
}

export default Melp;
