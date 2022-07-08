import React from 'react';

import { CardMedia, Typography, Grid } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { useDispatch } from 'react-redux/';
import {
  reduceCount,
  removeItem,
  decreaseCount,
} from '../../redux/slices/basketSlice';

import AppButton from '../AppButton/component';

const BasketItem = ({ item: { id, brand, price, photo, count } }) => {
  const dispatch = useDispatch();

  const removeElementFromBasket = () => {
    dispatch(removeItem(id));
  };
  const reduceElement = () => {
    dispatch(reduceCount(id));
  };
  const increaseElement = () => {
    dispatch(decreaseCount(id));
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: '20px' }} wrap="nowrap">
      <Grid item sx={{ width: '25%', maxHeight: '100px' }}>
        <CardMedia
          component="img"
          image={photo}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
          alt=""
        ></CardMedia>
      </Grid>
      <Grid item xs={12} sm container sx={{ alignItems: 'center' }}>
        <Grid item xs>
          <Typography>{brand}</Typography>
          <Typography>{price} ₴</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <AppButton variant="text" btnAction={increaseElement}>
            +
          </AppButton>
          <Typography> {count} </Typography>
          <AppButton variant="text" btnAction={reduceElement}>
            -
          </AppButton>
        </Grid>
        <Grid item>
          <AppButton variant="text" btnAction={removeElementFromBasket}>
            <DeleteForeverOutlinedIcon />
          </AppButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasketItem;
