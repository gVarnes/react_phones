import React from 'react';
import AccordionFilters from '../AccordionFilters';

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
import { setSelectedType } from '../../redux/slices/deviceSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

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

const NavForm = ({ isFiltersOpen, handleClose }) => {
  const { types } = useSelector((state) => state.device);
  const dispatch = useDispatch();

  const selectType = (type) => {
    return dispatch(setSelectedType(type));
  };

  return (
    <CustomizedDrawer anchor="left" open={isFiltersOpen} onClose={handleClose}>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ margin: 0 }}
        >
          <Typography>Types</Typography>
        </AccordionSummary>
        <AccordionFilters
          filterName="Types"
          filters={types}
          selectFilter={selectType}
        />
      </Accordion>
    </CustomizedDrawer>
  );
};

export default NavForm;
