import React, { useEffect, useRef } from 'react';
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

import { useSelector, useDispatch } from 'react-redux';
import { setIsBasketOpen } from '../../redux/slices/basketSlice';

import BasketItem from '../BasketItem/component';

const Basket = () => {
  const { basket, isBasketOpen, totalPrice } = useSelector(
    (state) => state.basket
  );
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(basket);
      localStorage.setItem('basket', json);
    }

    isMounted.current = true;
  }, [basket]);

  const dispatch = useDispatch();

  const closeBasket = () => {
    dispatch(setIsBasketOpen(false));
  };

  return (
    <Drawer anchor="right" open={isBasketOpen} onClose={closeBasket} sx={{}}>
      <List
        sx={{
          maxWidth: '380px',
          marginTop: '60px',
          padding: '10px',
          paddingTop: '0px',
        }}
      >
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
            {basket.map((card) => {
              return <BasketItem {...card} key={card.id}></BasketItem>;
            })}
            <Divider />
            <ListItem>Total price: {totalPrice}</ListItem>
          </Paper>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
