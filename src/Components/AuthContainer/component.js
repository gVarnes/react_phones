import React from 'react';

import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${theme.palette.primary.contrastText};
`
);

const AuthContainer = ({ children }) => {
  return <StyledContainer maxWidth="xs">{children}</StyledContainer>;
};

export default AuthContainer;
