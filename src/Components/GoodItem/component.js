import React from 'react';

//material ui
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

const GoodItem = ({ id, name, img, price, rating }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={6} sm={4} md={3} key={id}>
      <Card>
        <CardActionArea
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
          onClick={() => navigate(`/device/${id}`)}
        >
          <CardMedia
            component="img"
            height="140"
            image={'http://localhost:3001/public/' + img}
            sx={{
              backgroundColor: 'white',
              objectFit: 'contain',
              '&:hover': {
                objectFit: 'contain',
                scale: '1.1',
              },
              transition: 'all 0.3s ease',
            }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              sx={{ flex: '1 1 100%' }}
            >
              {name}
            </Typography>
            <Typography>
              <Rating value={rating} precision={0.5} readOnly></Rating>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GoodItem;
