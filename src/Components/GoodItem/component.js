import React from 'react';
import AppButton from '../AppButton';

//material ui
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

//redux
import { useDispatch } from 'react-redux';
import { setBasketItem } from '../../redux/slices/basketSlice';
import { useNavigate } from 'react-router-dom';

// const CustomizedCard = styled(Card)(
//   ({ theme }) => `
// 	  height: 100%;
// 	  display: grid;
// 	  grid-template-columns: repeat(2, 1fr);
// 	  grid-auto-rows: minmax(2, 1fr);
// 	  grid-template-areas:
// 			"img card"
// 			"img button";
// 	  align-items:center;
// 	  align-content: space-between;
// 	  padding: ${theme.spacing(2)};
// 	 `
// );

const CustomizedCard = styled(Card)(
  ({ theme }) => `
  
    display: flex;
    flex-direction: column;
	  align-items:center;
	  align-content: space-between;
	  padding: ${theme.spacing(2)};
    border: 1px solid black;
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

const GoodItem = ({
  card: {
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
    type,
  },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log({
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
    type,
  });

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
            image={photo}
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
            sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              sx={{ flex: '1 1 100%' }}
            >
              {brand} - {model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GoodItem;
