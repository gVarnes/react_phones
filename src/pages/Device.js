import React from 'react';
import AppButton from '../Components/AppButton';
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
import Descriptions from '../Components/Descriptions/component';

const StyledTypography = styled(Typography)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Device = () => {
  const { id } = useParams();
  const [rating, setRating] = React.useState(2.5);

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
            image="https://content1.rozetka.com.ua/goods/images/big/215587210.jpg"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: '100%' }}>
          <Card>
            <CardContent>
              <StyledTypography component="h3" variant="h3">
                Name
              </StyledTypography>
              <StyledTypography>
                <Rating value={rating} precision={0.5} readOnly></Rating>
              </StyledTypography>
              <StyledTypography variant="h5">Price</StyledTypography>
            </CardContent>
            <CardActions>
              <AppButton>
                <AddIcon />
              </AppButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Descriptions />
    </Container>
  );
};

export default Device;
