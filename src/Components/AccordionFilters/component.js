import React from 'react';
import AppButton from '../AppButton/component';

import { AccordionDetails } from '@mui/material';

const AccordionFilters = ({ filters, selectFilter }) => {
  return (
    <>
      {filters.map((item, index) => {
        return (
          <AccordionDetails key={index}>
            <AppButton
              btnAction={() => {
                selectFilter(item);
              }}
            >
              {item.name}
            </AppButton>
          </AccordionDetails>
        );
      })}
    </>
  );
};

export default AccordionFilters;
