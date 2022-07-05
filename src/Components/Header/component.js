import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

import { setIsBasketOpen } from '../../redux/slices/basketSlice';
import { useDispatch } from 'react-redux';
import AppButton from '../AppButton';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
            react-phones
          </Typography>
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
            <Button
              color="inherit"
              onClick={() => {
                dispatch(setIsBasketOpen(true));
              }}
            >
              <ShoppingBasket></ShoppingBasket>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
