import React, { useState, useEffect } from 'react';

import Basket from './Components/Basket/component';
import Goods from './Components/Goods';
import NavForm from './Components/NavForm/component';
import Header from './Components/Header/component';
import AppPaper from './Components/AppPaper/component';

//material ui
import { Container } from '@mui/system';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import AppButton from './Components/AppButton';

const App = () => {
  const [cards, setCard] = useState([]);

  const dispatch = useDispatch();

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
        <Goods cards={cards} />
      </main>
      <NavForm />
      <Basket />
    </div>
  );
};

export default App;
