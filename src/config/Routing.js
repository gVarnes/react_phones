import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Earphones from '../Components/Earphones';
import Laptops from '../Components/Laptops';
import Phones from '../Components/Phones';
import Watches from '../Components/Watches';
import Shop from '../pages/Shop';

import { authRoutes, publicRoutes } from '../routes';

import { useSelector, useDispatch } from 'react-redux';
import ShopNew from '../pages/ShopNew';

const Routing = () => {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/phones" element={<Phones />} />
      <Route path="/laptops" element={<Laptops />} />
      <Route path="/earphones" element={<Earphones />} />
      <Route path="/watches" element={<Watches />} />
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {/* <Route path="*" element={<Shop />} /> */}
      {/* <Route path="*" element={<ShopNew />} /> */}
    </Routes>
  );
};

export default Routing;
