import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { ShoppingBasket, WindowRounded } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/system';

import { setIsBasketOpen } from '../../redux/slices/basketSlice';
import { setThemeMode } from '../../redux/slices/themeModeSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import AppButton from '../AppButton';
import { useEffect } from 'react';
import { setIsAuth, setUser } from '../../redux/slices/userSlice';

const CustomizedTypography = styled(Typography)`
  flex-grow: 1;
`;

const Header = () => {
  const { isAuth, user } = useSelector((state) => state.user);
  const { isBasketOpen } = useSelector((state) => state.basket);
  const { mode } = useSelector((state) => state.themeMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //a simple chacking is logged user or not
    // it should be refactored
    if (localStorage.getItem('token')) {
      dispatch(setIsAuth(true));
    }
  }, []);

  const logout = () => {
    dispatch(setUser({}));
    dispatch(setIsAuth(false));
    localStorage.removeItem('token');
    navigate('/');
  };
  const moveToLogin = () => navigate('/login');
  const moveToAdmin = () => navigate('/admin');
  const openBasket = () => dispatch(setIsBasketOpen(!isBasketOpen));

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container>
        <Toolbar sx={{ padding: '0' }}>
          <CustomizedTypography variant="h5" component="span">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              {window.innerWidth < 600 ? 'React-p' : 'react-phones'}
            </Link>
          </CustomizedTypography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            {isAuth ? (
              <>
                <AppButton btnAction={logout}>Log out</AppButton>
                {window.innerWidth > 900 && (
                  <AppButton btnAction={moveToAdmin}>Admin panel</AppButton>
                )}
              </>
            ) : (
              <AppButton btnAction={moveToLogin}>Log in</AppButton>
            )}
          </Box>
          {/* <AppButton
              color="inherit"
              variant="text"
              btnAction={() => {
                dispatch(setThemeMode(mode === 'light' ? 'dark' : 'light'));
              }}
            >
              {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
            </AppButton> */}
          <AppButton color="inherit" variant="text" btnAction={openBasket}>
            <ShoppingBasket />
          </AppButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
