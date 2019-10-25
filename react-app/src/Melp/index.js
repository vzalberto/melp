import React, { useState, useEffect } from "react";
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

import { Anchor, Grid, Grommet, Box, Text } from 'grommet';

import RestaurantList from '../RestaurantList'

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
        family: 'Inconsolata',
        size: '14px',
        height: '20px',
      },
    },
  }

  return (

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
      <Text>mapa</Text>
    </Box>
  </Grid>  

    </Grommet>
  );
}

export default Melp;
