import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';

const Descriptions = () => {
  const theme = useTheme();
  const descriptions = [
    { title: 'RAM', description: '257 GB' },
    {
      title: 'RAM',
      description: `
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam praesentium beatae qui nihil atque explicabo placeat accusamus nam quas. Nulla dolore saepe minus facere debitis perferendis eveniet corrupti in.`,
    },
    { title: 'Lorem ipsum dolor sit amet consectetur', description: '257 GB' },
    { title: 'RAM', description: '257 GB' },
    { title: 'RAM', description: '257 GB' },
  ];
  return (
    <List sx={{ color: 'white' }}>
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
        Descriptions
      </Typography>
      {descriptions.map((desc, idx) => (
        <ListItem
          key={idx}
          sx={{
            display: 'grid',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'start',
            fontSize: '1.1rem',
            lineHeight: '1.5rem',
            padding: '0.5rem',
            gridTemplateColumns: 'repeat(2,1fr)',
            backgroundColor: idx % 2 === 0 && theme.palette.primary.main,
          }}
        >
          <ListItemText>{desc.title}</ListItemText>
          <ListItemText>{desc.description}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Descriptions;
