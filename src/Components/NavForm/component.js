import React from 'react';

import { setSortByCondition } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux/es/exports';

import { Divider, Grid, List, ListItem, ListItemText } from '@mui/material';

import AppButton from '../AppButton/component';
import FiltersList from '../FiltersList';

const NavForm = () => {
  const brands = ['Samsung', 'Apple', 'Xiaomi', 'Sony', 'Motorola'];
  const colors = [
    'white',
    'black',
    'purple',
    'grey',
    'blue',
    'gold',
    'green',
    'red',
    'pink',
  ];

  const dispatch = useDispatch();

  const sortOnclick = (value) => {
    dispatch(setSortByCondition(value));
  };

  return (
    <div style={{ maxWidth: '250px' }}>
      <List>
        <ListItem sx={{ padding: '0px' }}>
          <ListItemText>Sort by price</ListItemText>
        </ListItem>
        <ListItem>
          <AppButton
            btnAction={() => {
              sortOnclick('desc');
            }}
          >
            Max price first
          </AppButton>
        </ListItem>
        <ListItem>
          <AppButton
            btnAction={() => {
              sortOnclick('asc');
            }}
          >
            Min price first
          </AppButton>
        </ListItem>
      </List>
      <FiltersList filterName="Brands" filters={brands} />
      <FiltersList filterName="Colors" filters={colors} />
    </div>
  );
};

export default NavForm;
