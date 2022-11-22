import React, { useState, useEffect } from 'react';
import TypeBar from '../Components/TypeBar';
import GoodItem from '../Components/GoodItem';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { setBrands, setTypes } from '../redux/slices/deviceSlice';

import { deviceApi } from '../api/deviceApi';

const ShopNew = () => {
  const [cards, setCard] = useState([]);
  const { filterByCondition, sortByCondition } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://62bc03efeff39ad5ee1a123a.mockapi.io/watches?${
        filterByCondition && `filter=${filterByCondition}`
      }&${sortByCondition && `sortBy=price&order=${sortByCondition}`}`
    )
      .then((res) => res.json())
      .then((items) => {
        setCard(items);
      });

    //fetching types and adding to the store
    deviceApi.getTypes().then((data) => dispatch(setTypes(data)));
    deviceApi.getBrands().then((data) => dispatch(setBrands(data)));
  }, []);
  return (
    <Container>
      <Grid
        container
        wrap="nowrap"
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ padding: '60px 0' }}
      >
        <Grid item xs={4}>
          <TypeBar />
        </Grid>
        <Grid item xs={12}>
          <Grid item container spacing={1}>
            {cards.map((card) => (
              <GoodItem card={card} key={card.id} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopNew;
