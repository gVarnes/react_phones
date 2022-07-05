import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import AppButton from '../AppButton';

import { useDispatch, useSelector } from 'react-redux';
import { setBasketElem } from '../../redux/slices/basketSlice';

import './index.scss';

const Goods = ({ cards }) => {
  const { basket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  // const addElementIntoBasket = () => dispatch(setBasketElem(card));

  return (
    <Grid container spacing={2}>
      {cards.map((card) => {
        const {
          id,
          isStoredInFacility,
          photo,
          brand,
          model,
          haveDiscount,
          price,
          color,
          country,
          os,
          memory,
        } = card;
        return (
          <Grid
            item
            xs={12}
            md={6}
            key={id}
            sx={{
              maxHeight: '300px',
              marginBottom: '20px',
            }}
          >
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                padding: '10px',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  objectFit: 'contain',
                  height: '140px',
                }}
                image={photo}
                alt=""
              />
              <CardContent
                sx={{
                  padding: '0px',
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: 'auto',
                }}
              >
                <Typography variant="h5" component="h4" sx={{ flex: 0 }}>
                  {brand} - {model}
                </Typography>
                <Typography>{price} ₴</Typography>
                <Typography>
                  Color: <span className="color">{color}</span>
                </Typography>
                <Typography>Country: {country}</Typography>
                <Typography>Memory: {memory}GB</Typography>
                <Typography>OS: {os}</Typography>
                <AppButton
                  btnAction={() => {
                    dispatch(setBasketElem(card));
                  }}
                >
                  <AddIcon></AddIcon>
                </AppButton>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Goods;
