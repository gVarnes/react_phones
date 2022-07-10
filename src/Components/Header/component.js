import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import { styled } from '@mui/system';

import { setIsBasketOpen } from '../../redux/slices/basketSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import AppButton from '../AppButton';

const CustomizedTypography = styled(Typography)`
  flex-grow: 1;
`;

const Header = () => {
  const { isBasketOpen } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container>
        <Toolbar>
          <CustomizedTypography variant="h5" component="span">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              react-phones
            </Link>
          </CustomizedTypography>
          <Box>
            <AppButton
              color="inherit"
              variant="text"
              btnAction={() => {
                dispatch(setIsBasketOpen(!isBasketOpen));
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
