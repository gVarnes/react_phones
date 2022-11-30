import React, { useState, useEffect } from 'react';

import Basket from './Components/Basket/component';
import Header from './Components/Header/component';

//material ui
import { Box } from '@mui/system';
//redux
import { useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { cyan, grey, teal } from '@mui/material/colors';
import Routing from './config/Routing';

const App = () => {
  let { mode } = useSelector((state) => state.themeMode);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              light: teal[900],
              main: teal[200],
              text: '000',
            },
            divider: teal[200],
            background: {
              default: grey[300],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              light: cyan[100],
              main: cyan[800],
              text: cyan[100],
            },
            divider: cyan[200],
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
        }}
        className="wrapper"
      >
        <Header />
        {/* <AppPaper /> */}
        <Routing />
        <Basket />
      </Box>
    </ThemeProvider>
  );
};

export default App;
