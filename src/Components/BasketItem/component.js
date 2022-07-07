import { CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';
import Btn from '../AppButton/component';

import { useDispatch } from 'react-redux/';
import { removeItem } from '../../redux/slices/basketSlice';

const BasketItem = ({ id, brand, price, photo }) => {
  const dispatch = useDispatch();

  const removeElementFromBasket = () => {
    dispatch(removeItem(id));
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
      <Grid item sx={{ width: '25%', maxHeight: '50px' }}>
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
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography>{brand}</Typography>
            <Typography>{price}</Typography>
          </Grid>
          <Grid item>
            <Btn btnAction={removeElementFromBasket}>Remove</Btn>
          </Grid>
        </Grid>
        <Grid item>
          <Typography component="div">{price} ₴</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasketItem;
