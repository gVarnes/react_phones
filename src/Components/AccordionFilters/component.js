import React from 'react';

import { useDispatch } from 'react-redux/es/exports';
import { setFilterByCondition } from '../../redux/slices/filterSlice';

import AppButton from '../AppButton/component';
import { AccordionDetails } from '@mui/material';

const AccordionFilters = ({ filters }) => {
  const dispatch = useDispatch();

  const filterOnClick = (item) => {
    dispatch(setFilterByCondition(item));
  };

  return (
    <>
      {filters.map((item, index) => {
        return (
          <AccordionDetails key={index}>
            <AppButton
              btnAction={() => {
                filterOnClick(item);
              }}
            >
              {item}
            </AppButton>
          </AccordionDetails>
        );
      })}
    </>
  );
};

export default AccordionFilters;
