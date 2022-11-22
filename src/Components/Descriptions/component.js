import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const Descriptions = ({ info }) => {
  const theme = useTheme();
  return (
    <List sx={{ color: 'white' }}>
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
        Informations
      </Typography>
      {info?.map((desc, idx) => (
        <ListItem
          key={idx}
          sx={{
            display: 'grid',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'start',
            fontSize: '1.1rem',
            lineHeight: '1.5rem',
            gridTemplateColumns: 'repeat(2,1fr)',
          }}
        >
          <ListItemText
            sx={{
              backgroundColor: idx % 2 === 0 && theme.palette.primary.main,
              padding: '0.5rem',
            }}
          >
            {desc.title}
          </ListItemText>
          <ListItemText
            sx={{
              backgroundColor: idx % 2 === 0 && theme.palette.primary.main,
              padding: '0.5rem',
            }}
          >
            {desc.description}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Descriptions;
