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
import BasketItem from '../BasketItem/component';

import { useSelector, useDispatch } from 'react-redux';
import { setIsBasketOpen } from '../../redux/slices/basketSlice';

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
      <List sx={{ maxWidth: '380px', marginTop: '60px' }}>
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
            <Divider />
            <ListItem>Total price: {totalPrice}</ListItem>
          </Paper>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
