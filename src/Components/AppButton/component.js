import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const AppButton = ({
  children,
  btnAction,
  color,
  variant,
  type,
  fullWidth,
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={btnAction}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};

AppButton.propTypes = {
  btnAction: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf(['submit', 'reset']),
  fullWidth: PropTypes.bool,
};

AppButton.defaultProps = {
  variant: 'contained',
};

export default AppButton;
