import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

const Input = forwardRef((props, ref) => {
  return (
    <TextField fullWidth {...props} inputRef={ref} margin="normal"></TextField>
  );
});

export default Input;
