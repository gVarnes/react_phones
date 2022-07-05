import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import { styled } from '@mui/system';

import { setIsBasketOpen } from '../../redux/slices/basketSlice';
import { useDispatch } from 'react-redux';

import AppButton from '../AppButton';

const CustomizedTypography = styled(Typography)`
  flex-grow: 1;
`;

const Header = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <CustomizedTypography variant="h5" component="span">
            react-phones
          </CustomizedTypography>
          <Box>
            <AppButton
              color="inherit"
              variant="text"
              btnAction={() => {
                dispatch(setIsBasketOpen(true));
              }}
            >
              <ShoppingBasket></ShoppingBasket>
            </AppButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
