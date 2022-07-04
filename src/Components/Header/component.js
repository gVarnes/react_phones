import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

import { setIsBasketOpen } from '../../redux/slices/basketSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
          react-phones
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            dispatch(setIsBasketOpen(true));
          }}
        >
          <ShoppingBasket></ShoppingBasket>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
