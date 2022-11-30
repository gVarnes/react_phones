import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../routes';

import { useSelector, useDispatch } from 'react-redux';
import Shop from '../pages/Shop';

const Routing = () => {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {/* <Route path="*" element={<ShopNew />} /> */}
    </Routes>
  );
};

export default Routing;
