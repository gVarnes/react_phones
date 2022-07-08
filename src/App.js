import React, { useState, useEffect } from 'react';

import Basket from './Components/Basket/component';
import Goods from './Components/Goods';
import NavForm from './Components/NavForm/component';
import Header from './Components/Header/component';
import AppPaper from './Components/AppPaper/component';

import { Routes, Route, Link } from 'react-router-dom';

//material ui

//redux
import { useSelector } from 'react-redux';
import Laptops from './Components/Laptops/component';

const App = () => {
  const [cards, setCard] = useState([]);

  const { filterByCondition, sortByCondition } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    fetch(
      `https://62bc03efeff39ad5ee1a123a.mockapi.io/items?${
        filterByCondition && `filter=${filterByCondition}`
      }&${sortByCondition && `sortBy=price&order=${sortByCondition}`}`
    )
      .then((res) => res.json())
      .then((items) => {
        setCard(items);
      });
  }, [filterByCondition, sortByCondition]);

  return (
    <div className="wrapper">
      <Header />
      <AppPaper />
      <main>
        <Link to="/phones">phones</Link>
        <Link to="/laptops">laptops</Link>
        <Routes>
          <Route path="/phones" element={<Goods cards={cards} />} />
          <Route path="/laptops" element={<Laptops />} />
        </Routes>
        {/* <Goods cards={cards} /> */}
      </main>
      <NavForm />
      <Basket />
    </div>
  );
};

export default App;
