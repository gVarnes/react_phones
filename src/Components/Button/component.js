import React from 'react';
import { Button } from '@mui/material';

const Btn = ({ children, btnAction }) => {
  return (
    <Button variant="contained" onClick={btnAction}>
      {children}
    </Button>
  );
};

export default Btn;
