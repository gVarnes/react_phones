import React from 'react';
import AuthContainer from '../Components/AuthContainer';
import Input from '../Components/Input';
import AppButton from '../Components/AppButton';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';

import { useForm } from 'react-hook-form';

import { Box, Typography, Link as LinkMUI } from '@mui/material';
import styled from '@emotion/styled';

import { Link, useLocation } from 'react-router-dom';

const StyledForm = styled('form')`
  width: 100%;
`;

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();

  //this variable needs for rendering different forms by condition below
  const isLogin = location.pathname === LOGIN_ROUTE;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthContainer>
      <Typography component="h3" variant="h5">
        {isLogin ? 'Login' : 'Registration'}
      </Typography>

      <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('username')} label="User name"></Input>
        <Input {...register('email')} label="Email"></Input>
        <Input
          {...register('password')}
          label="Password"
          type="password"
        ></Input>
        <Box>
          {isLogin ? (
            <Typography marginBottom={1}>
              Dont have an account?{' '}
              <LinkMUI component={Link} to={REGISTRATION_ROUTE}>
                Registration
              </LinkMUI>
            </Typography>
          ) : (
            <Typography marginBottom={1}>
              Have an account?{' '}
              <LinkMUI component={Link} to={LOGIN_ROUTE}>
                Login
              </LinkMUI>
            </Typography>
          )}
          <AppButton type="submit" fullWidth>
            {isLogin ? 'Login' : 'Registration'}
          </AppButton>
        </Box>
      </StyledForm>
    </AuthContainer>
  );
};

export default Auth;
