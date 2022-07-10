import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

import { ROUTES } from '../../Constants';

const ProductsNavigation = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: '30px' }}>
        {ROUTES.map(({ PATH, DESCRIPTION, IMAGE_URL }) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={PATH} sx={{}}>
              <Link to={PATH} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: '33,333%', paddingTop: '20px' }}>
                  <CardMedia
                    sx={{
                      width: '100%',
                      height: '140px',
                      objectFit: 'contain',
                    }}
                    component="img"
                    image={IMAGE_URL}
                  ></CardMedia>
                  <CardContent>
                    <Typography sx={{ fontSize: '1.6rem' }}>
                      {DESCRIPTION}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProductsNavigation;
