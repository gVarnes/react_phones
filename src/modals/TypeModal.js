import React, { useState } from 'react';
import AppButton from '../Components/AppButton';
import Input from '../Components/Input';

import { Box, Modal, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

import { deviceApi } from '../api/deviceApi';

const TypeModal = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const theme = useTheme();

  const onSubmit = async () => {
    const response = await deviceApi.createType({ name });
    setName('');
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          color: theme.palette.primary.contrastText,
          width: '600px',
          margin: '100px auto 0',
          padding: '1rem',
          border: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create type
        </Typography>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Create type"
        />
        <AppButton btnAction={onSubmit}>Create</AppButton>
      </Box>
    </Modal>
  );
};

export default TypeModal;
