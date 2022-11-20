import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Device from './pages/Device';
import Shop from './pages/Shop';
import Auth from './pages/Auth';

import {
  ADMIN_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
} from './utils/constants';
import ShopNew from './pages/ShopNew';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  // {
  //   path: SHOP_ROUTE,
  //   Component: Shop,
  // },
  {
    path: SHOP_ROUTE,
    Component: ShopNew,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: `${DEVICE_ROUTE}/:id`,
    Component: Device,
  },
];