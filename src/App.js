import React, { useState, useEffect } from 'react';

import Basket from './Components/Basket/component';
import Header from './Components/Header/component';
import AppPaper from './Components/AppPaper/component';
import Phones from './Components/Phones';
import Laptops from './Components/Laptops/component';
import ProductsNavigation from './Components/ProductsNavigation/components';
import Earphones from './Components/Earphones/component';
import Watches from './Components/Watches/component';

import { Routes, Route } from 'react-router-dom';

//material ui
import { Box } from '@mui/system';
//redux
import { useSelector } from 'react-redux/es/exports';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { cyan, grey, teal } from '@mui/material/colors';

const App = () => {
  const { mode } = useSelector((state) => state.themeMode);
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              main: teal[200],
            },
            divider: teal[200],
            background: {
              default: grey[400],
            },
          }
        : {
            mode: 'dark',
            primary: {
              main: teal[200],
            },
            // palette values for dark mode
            primary: cyan,
            divider: cyan[200],
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ backgroundColor: theme.palette.background.default }}
        className="wrapper"
      >
        <Header />
        <AppPaper />
        <Box>
          <Routes>
            <Route path="/" element={<ProductsNavigation />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/watches" element={<Watches />} />
          </Routes>
        </Box>
        <Basket />
      </Box>
    </ThemeProvider>
  );
};

export default App;
