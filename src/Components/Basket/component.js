import React, { useEffect } from 'react';
import {
  Divider,
  Drawer,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import BasketItem from '../BasketItem/component';

import { useSelector, useDispatch } from 'react-redux';
import { setBasketElem, setIsBasketOpen } from '../../redux/slices/basketSlice';

const Basket = () => {
  const { basket, isBasketOpen } = useSelector((state) => state.basket);

  useEffect(() => {
    const basketStorage = localStorage.getItem('basket');
    basketStorage && dispatch(setBasketElem(basketStorage));
  }, []);
  const dispatch = useDispatch();

  const closeBasket = () => {
    dispatch(setIsBasketOpen(false));
  };

  return (
    <Drawer anchor="right" open={isBasketOpen} onClose={closeBasket}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />
        {!basket.length ? (
          <ListItem>Shopping cart is empty</ListItem>
        ) : (
          <Paper>
            {basket.map(({ id, brand, price, photo }) => {
              return (
                <BasketItem
                  key={id}
                  id={id}
                  brand={brand}
                  price={price}
                  photo={photo}
                ></BasketItem>
              );
            })}
          </Paper>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
