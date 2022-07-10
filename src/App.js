import React, { useState, useEffect } from 'react';

import Basket from './Components/Basket/component';
import NavForm from './Components/NavForm/component';
import Header from './Components/Header/component';
import AppPaper from './Components/AppPaper/component';
import Phones from './Components/Phones';
import Laptops from './Components/Laptops/component';
import ProductsNavigation from './Components/ProductsNavigation/components';
import Earphones from './Components/Earphones/component';
import Watches from './Components/Watches/component';

import { Routes, Route, Link } from 'react-router-dom';

//material ui

//redux

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <AppPaper />
      <main>
        <Routes>
          <Route path="/" element={<ProductsNavigation />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/watches" element={<Watches />} />
        </Routes>
      </main>
      <Basket />
    </div>
  );
};

export default App;
