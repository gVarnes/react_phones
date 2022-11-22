import React, { useState } from 'react';
import {
  Box,
  Container,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';

import { Create } from '@mui/icons-material';
import DeviceModal from '../modals/DeviceModal';
import BrandModal from '../modals/BrandModal';
import TypeModal from '../modals/TypeModal';

const Admin = () => {
  const [deviceModalVisible, setDeviceModalVisible] = useState(false);
  const [typeModalVisible, setTypeModalVisible] = useState(false);
  const [brandModalVisible, setBrandModalVisible] = useState(false);
  const actions = [
    {
      icon: <Create />,
      name: 'Add device',
      showModal: () => setDeviceModalVisible(true),
    },
    {
      icon: <Create />,
      name: 'Add type',
      showModal: () => setTypeModalVisible(true),
    },
    {
      icon: <Create />,
      name: 'Add brand',
      showModal: () => setBrandModalVisible(true),
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          transform: 'translateZ(0px)',
          flexGrow: 1,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={action.showModal}
            />
          ))}
        </SpeedDial>
      </Box>
      <DeviceModal
        open={deviceModalVisible}
        handleClose={() => setDeviceModalVisible(false)}
      />
      <BrandModal
        open={brandModalVisible}
        handleClose={() => setBrandModalVisible(false)}
      />
      <TypeModal
        open={typeModalVisible}
        handleClose={() => setTypeModalVisible(false)}
      />
    </Container>
  );
};

export default Admin;
