import React from 'react';
import AuthContainer from '../Components/AuthContainer';
import Input from '../Components/Input';
import AppButton from '../Components/AppButton';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { userApi } from '../api/userApi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '../utils/validations';

import {
  Box,
  Typography,
  Link as LinkMUI,
  Snackbar,
  IconButton,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setIsAuth, setUser } from '../redux/slices/userSlice';

const StyledForm = styled('form')`
  width: 100%;
`;

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //this variable needs for rendering different forms by condition below
  const isLogin = location.pathname === LOGIN_ROUTE;

  const onSubmit = async (data) => {
    try {
      //if rendered login form it calls login function else registration
      let response;

      //getting user from response
      if (isLogin) {
        response = await userApi.login(data);
        console.log(response);
      } else {
        response = await userApi.registration(data);
      }

      //chech for errors in response and after that set error message to the "response" field
      //if its true function should return something in order to not to continue
      if (response.status === 404) {
        setError('response', { message: response.data.message });
        return;
      }

      //change store user on user from response and change isAuth to true
      dispatch(setUser(response));
      dispatch(setIsAuth(true));
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContainer>
      <Typography component="h3" variant="h5">
        {isLogin ? 'Login' : 'Registration'}
      </Typography>

      <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Input
          {...register('password')}
          label="Password"
          type="password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
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
      <Snackbar
        open={!!errors?.response}
        autoHideDuration={6000}
        onClose={() => {}}
      >
        <Alert
          severity="error"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="primary"
              // onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {errors?.response?.message}
        </Alert>
      </Snackbar>
    </AuthContainer>
  );
};

export default Auth;
