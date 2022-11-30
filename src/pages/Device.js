import React, { useState, useEffect } from 'react';
import AppButton from '../Components/AppButton';
import Descriptions from '../Components/Descriptions';

import { deviceApi } from '../api/deviceApi';

import { useParams } from 'react-router-dom';

import { Container } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Rating,
} from '@mui/material';
import { styled } from '@mui/system';

import { useDispatch } from 'react-redux';
import { setBasketItem } from '../redux/slices/basketSlice';

const StyledTypography = styled(Typography)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Device = () => {
  const [rating, setRating] = useState(0);
  const [device, setDevice] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    deviceApi.getOneDevice(id).then((data) => {
      setDevice(data);
      //setting rating from request cause it should be controlled and it doest work with device.rating
      setRating(data.rating);
    });
  }, []);

  const addToBasket = () => {
    dispatch(setBasketItem(device));
  };

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          flexWrap: 'nowrap',
          gap: 2,
          padding: '100px 0',
        }}
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid
          item
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CardMedia
            component="img"
            sx={{ width: '300px', height: '300px', objectFit: 'contain' }}
            image={`http://localhost:3001/public/${device.img}`}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: '100%' }}>
          <Card>
            <CardContent>
              <StyledTypography component="h3" variant="h3">
                {device.name}
              </StyledTypography>
              <StyledTypography>
                <Rating value={rating} precision={0.5} readOnly></Rating>
              </StyledTypography>
              <StyledTypography variant="h5">{device.price}</StyledTypography>
            </CardContent>
            <CardActions onClick={addToBasket}>
              <AppButton>
                <AddIcon />
              </AppButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Descriptions info={device.info} />
    </Container>
  );
};

export default Device;
