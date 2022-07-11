import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Avatar,
  Grid,
  Skeleton,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';

const Image = styled('img')({
  width: '100%',
});

const CustomizedCard = styled(Card)(
  ({ theme }) => `
		min-height: 250px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: minmax(2, 1fr);
		grid-template-areas:
			 "img card"
			 "img button";
		align-items:center;
		align-content: space-evenly;
		padding: ${theme.spacing(2)};
	  `
);
const CustomizedSkeleton = styled(Skeleton)(
  ({ theme }) => `
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

const GoodsSkeleton = () => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        marginBottom: '20px',
      }}
    >
      <CustomizedCard>
        <CustomizedSkeleton variant="rectangular" width="120px">
          <Avatar />
        </CustomizedSkeleton>
        <CustomizedCardContent>
          <Skeleton variant="text" width="100%" height="25px"></Skeleton>
          <Skeleton variant="text" width="100%" height="25px"></Skeleton>
          <Skeleton variant="text" width="100%" height="25px"></Skeleton>
          <Skeleton variant="text" width="100%" height="25px"></Skeleton>
        </CustomizedCardContent>
        <CardActions sx={{ gridArea: 'button' }}>
          <Skeleton variant="rectangular" width="100%" height="50px"></Skeleton>
        </CardActions>
      </CustomizedCard>
    </Grid>
  );
};

export default GoodsSkeleton;
