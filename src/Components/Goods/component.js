import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

import AppButton from '../AppButton';

import { useDispatch } from 'react-redux';
import { setBasketElem } from '../../redux/slices/basketSlice';

import './index.scss';

const CustomizedCard = styled(Card)(
  ({ theme }) => `
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(2, 1fr);
    grid-template-areas:
        "img card"
        "img button";
    align-items:center;
    align-content: space-between;
    padding: ${theme.spacing(2)};
	`
);
const CustomizedCardMedia = styled(CardMedia)(
  ({ theme }) => `
    object-fit: contain;
    height: 140px;
    grid-area: img;
	`
);

const CustomizedCardContent = styled(CardContent)(
  ({ theme }) => `
    padding: 0px;
    grid-area: card;
	`
);

const Goods = ({ cards }) => {
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
            sm={6}
            md={4}
            key={id}
            sx={{
              maxHeight: '300px',
              marginBottom: '20px',
            }}
          >
            <CustomizedCard>
              <CustomizedCardMedia component="img" image={photo} alt="" />
              <CustomizedCardContent>
                <Typography variant="h5" component="h4" sx={{ flex: 0 }}>
                  {brand} - {model}
                </Typography>
                <Typography>{price} ₴</Typography>
                <Typography>Color: {color}</Typography>
                <Typography>Country: {country}</Typography>
                <Typography>Memory: {memory}GB</Typography>
                <Typography>OS: {os}</Typography>
              </CustomizedCardContent>
              <CardActions sx={{ gridArea: 'button' }}>
                <AppButton
                  btnAction={() => {
                    dispatch(setBasketElem(card));
                  }}
                >
                  <AddIcon></AddIcon>
                </AppButton>
              </CardActions>
            </CustomizedCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Goods;
