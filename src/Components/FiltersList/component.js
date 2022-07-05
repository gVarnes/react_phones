import React from 'react';

import { useDispatch } from 'react-redux/es/exports';
import { setFilterByCondition } from '../../redux/slices/filterSlice';

import AppButton from '../AppButton/component';
import { Divider, Grid, List, ListItem, ListItemText } from '@mui/material';

const FiltersList = ({ filterName, filters }) => {
  const dispatch = useDispatch();

  const filterOnClick = (item) => {
    dispatch(setFilterByCondition(item));
  };

  return (
    //  <List>
    //    <ListItem>
    //      <ListItemText>{filterName}</ListItemText>
    //    </ListItem>
    //    <Divider />
    //    {filters.map((item, index) => {
    //      return (
    //        <ListItem key={index}>
    //          <AppButton
    //            variant="text"
    //            btnAction={() => {
    //              filterOnClick(item);
    //            }}
    //          >
    //            {item}
    //          </AppButton>
    //        </ListItem>
    //      );
    //    })}
    //  </List>
    <div style={{ marginBottom: '30px' }}>
      <div style={{ marginBottom: '10px' }}>{filterName}</div>
      <Grid container spacing={1}>
        {filters.map((item, index) => {
          return (
            <Grid item key={index}>
              <AppButton
                btnAction={() => {
                  filterOnClick(item);
                }}
              >
                {item}
              </AppButton>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FiltersList;
