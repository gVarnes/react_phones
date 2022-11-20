import React from 'react';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedType } from '../../redux/slices/deviceSlice';

const TypeBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { types, selectedType } = useSelector((state) => state.device);
  return (
    <List sx={{ color: theme.palette.primary.text }}>
      {types.map((type) => (
        <ListItem disablePadding key={type.id}>
          <ListItemButton
            //styles when element is selected
            sx={{
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main,
              },
              '&.Mui-selected:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
            selected={type.id === selectedType.id}
            onClick={() => {
              dispatch(setSelectedType(type));
            }}
          >
            <ListItemText primary={type.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TypeBar;
