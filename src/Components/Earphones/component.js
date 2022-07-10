import React, { useState, useEffect } from 'react';
import AppButton from '../AppButton';
import GoodItem from '../GoodItem/component';

//material ui
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setIsFilterMenuOpen } from '../../redux/slices/filterMenuSlice';

import { addFilters } from '../../utils/addFilters';
import NavForm from '../NavForm/component';

const Earphones = () => {
  const [cards, setCard] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  const dispatch = useDispatch();

  const { filterByCondition, sortByCondition } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    fetch(
      `https://62bc03efeff39ad5ee1a123a.mockapi.io/earphones?${
        filterByCondition && `filter=${filterByCondition}`
      }&${sortByCondition && `sortBy=price&order=${sortByCondition}`}`
    )
      .then((res) => res.json())
      .then((items) => {
        setCard(items);
      });
  }, [filterByCondition, sortByCondition]);

  useEffect(() => {
    setBrands(addFilters(cards, 'brand'));
    setColors(addFilters(cards, 'color'));
  }, [cards]);

  return (
    <Container sx={{ mt: '20px' }} maxWidth="xl">
      <AppButton btnAction={() => dispatch(setIsFilterMenuOpen(true))}>
        Filters
      </AppButton>
      <Grid container spacing={2}>
        {cards.map((card) => {
          return <GoodItem card={card} key={card.id} />;
        })}
      </Grid>

      <NavForm brands={brands} colors={colors} />
    </Container>
  );
};

export default Earphones;
