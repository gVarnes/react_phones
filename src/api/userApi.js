import { host, authHost } from './apiConfig';
import jwt_decode from 'jwt-decode';
//needs for decoding token which contains info about user

export const userApi = {
  registration: async (request) => {
    //getting data from response
    const { data } = await host.post('user/registration', {
      ...request,
      role: 'ADMIN',
    });
    localStorage.setItem('token', data.token);
    //returning decoded info about user
    return jwt_decode(data.token);
  },

  login: async (request) => {
    //getting data from response
    const { data } = await host.post('user/login', request);
    localStorage.setItem('token', data.token);
    //returning decoded info about user
    return jwt_decode(data.token);
  },
  checkAuth: async () => {
    //this login should be reworked in server (instance.addHook does not work)
    const { data } = await host.get('user/auth');
    localStorage.setItem('token', data.token);
    //returning decoded info about user
    return jwt_decode(data.token);
  },
};
