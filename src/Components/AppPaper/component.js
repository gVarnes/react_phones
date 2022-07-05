import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Box, Container, styled } from '@mui/system';
import AppButton from '../AppButton';
import {} from '@mui/material/colors';

const CustomizedPaper = styled(Paper)(
  ({ theme }) => `
		position: relative;
		background-image: url(https://source.unsplash.com/random);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		padding-bottom: ${theme.spacing('10%')};
		color: #fff;
	`
);

const CustomizedBox = styled(Box)(
  ({ theme }) => `
	display:flex,
	flex-direction:column
	position:relative;
	padding: ${theme.spacing(4)}
`
);

const AppPaper = () => {
  return (
    <CustomizedPaper
      sx={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
    >
      <Container>
        <Grid container>
          <Grid item md={6}>
            <CustomizedBox>
              <Typography component="h2" variant="h5" color="inherit" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                harum.
              </Typography>
              <AppButton>Follow</AppButton>
            </CustomizedBox>
          </Grid>
        </Grid>
      </Container>
    </CustomizedPaper>
  );
};

export default AppPaper;
