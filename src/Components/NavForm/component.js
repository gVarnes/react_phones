import React from 'react';

import { setSortByCondition } from '../../redux/slices/filterSlice';
import { setIsFilterMenuOpen } from '../../redux/slices/filterMenuSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Typography,
  Drawer,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled';

import AppButton from '../AppButton/component';
import AccordionFilters from '../AccordionFilters';

const CustomizedDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    position: absolute;
    top: 60px;
    left: 0;
  }
  @media (max-width: 600px) {
    .MuiDrawer-paper {
      top: 56px;
    }
  }
`;

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

  const { isFilterMenuOpen } = useSelector((state) => state.filtersMenu);
  const dispatch = useDispatch();

  const sortOnclick = (value) => {
    dispatch(setSortByCondition(value));
  };
  return (
    <CustomizedDrawer
      anchor="left"
      open={isFilterMenuOpen}
      onClose={() => dispatch(setIsFilterMenuOpen(false))}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sort by price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ paddingLeft: 0 }}>
              <AppButton
                btnAction={() => {
                  sortOnclick('desc');
                }}
              >
                Max price first
              </AppButton>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <AppButton
                btnAction={() => {
                  sortOnclick('asc');
                }}
              >
                Min price first
              </AppButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ margin: 0 }}
        >
          <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionFilters filterName="Brands" filters={brands} />
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header3"
        >
          <Typography>Colors</Typography>
        </AccordionSummary>
        <AccordionFilters filterName="Colors" filters={colors} />
      </Accordion>
    </CustomizedDrawer>
  );
};

export default NavForm;
