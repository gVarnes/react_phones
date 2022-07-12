import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/system';

import { setIsBasketOpen } from '../../redux/slices/basketSlice';
import { setThemeMode } from '../../redux/slices/themeModeSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import AppButton from '../AppButton';
import { useEffect } from 'react';

const CustomizedTypography = styled(Typography)`
  flex-grow: 1;
`;

const Header = () => {
  const { isBasketOpen } = useSelector((state) => state.basket);
  const { mode } = useSelector((state) => state.themeMode);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

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
                dispatch(setThemeMode(mode === 'light' ? 'dark' : 'light'));
              }}
            >
              {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
            </AppButton>
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
