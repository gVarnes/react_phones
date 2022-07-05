import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const AppButton = ({ children, btnAction, color, variant }) => {
  return (
    <Button color={color} variant={variant} onClick={btnAction}>
      {children}
    </Button>
  );
};

AppButton.propTypes = {
  btnAction: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

AppButton.defaultProps = {
  variant: 'contained',
};

export default AppButton;
