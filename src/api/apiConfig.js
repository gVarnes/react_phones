import axios from 'axios';

const baseURL = 'http://localhost:3001/';

//config for users who is not logged in
export const host = axios.create({
  baseURL,
});

//config for users who is logged in
export const authHost = axios.create({
  baseURL,
});

//we are getting token from localStorage and using it in interceptor for logged users
const authInterceptor = (config) =>
  (config.headers.authorization = `Bearer ${localStorage.getItem('token')}`);

authHost.interceptors.request.use(authInterceptor);
