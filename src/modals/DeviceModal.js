import React, { useEffect } from 'react';
import {
  Modal,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
} from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { Controller, useFieldArray, useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { setBrands, setTypes } from '../redux/slices/deviceSlice';

import AppButton from '../Components/AppButton';
import Input from '../Components/Input/component';
import { deviceApi } from '../api/deviceApi';

const DeviceModal = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'info', // unique name for your Field Array
  });
  const theme = useTheme();
  const dispatch = useDispatch();

  const { types, brands } = useSelector((state) => state.device);

  useEffect(() => {
    //fetching types and adding to the store
    deviceApi.getTypes().then((data) => dispatch(setTypes(data)));
    deviceApi.getBrands().then((data) => dispatch(setBrands(data)));
  }, []);

  const onSubmit = async (data) => {
    const body = new FormData();

    Object.entries(data).forEach((item) => {
      //different logics to adding items in body for each field
      if (item[0] === 'img') {
        body.append(item[0], item[1][0]);
      } else if (item[0] === 'info') {
        body.append(item[0], JSON.stringify(item[1]));
      } else {
        body.append(item[0], item[1]);
      }
    });

    const response = await deviceApi.createDevice(body);
    reset();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock
      disablePortal
      sx={{
        overflow: 'auto',
        zIndex: 1200,
      }}
    >
      <Box
        sx={{
          color: theme.palette.primary.contrastText,
          margin: '100px auto 0',
          width: '600px',
          padding: '1rem',
          border: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create device
        </Typography>
        <form
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl variant="filled">
            <InputLabel id="type-select-label">Choose type</InputLabel>
            <Controller
              control={control}
              name="typeId"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Select
                  labelId="type-select-label"
                  id="type-select"
                  onBlur={onBlur}
                  onChange={onChange}
                  checked={value}
                  inputRef={ref}
                  defaultValue=""
                >
                  {types.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          <FormControl variant="filled">
            <InputLabel id="brand-select-label">Chose brand</InputLabel>
            <Controller
              control={control}
              name="brandId"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Select
                  labelId="brand-select-label"
                  id="brand-select"
                  onBlur={onBlur}
                  onChange={onChange}
                  checked={value}
                  inputRef={ref}
                  defaultValue=""
                >
                  {brands.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          <Input
            {...register('name')}
            label=""
            placeholder="Enter the name of the device"
          />
          <Input
            {...register('price')}
            label=""
            type="number"
            placeholder="Enter the price of the device"
          />
          <Input {...register('img')} label="" type="file" />

          <AppButton
            type="button"
            btnAction={() => append()}
            variant="outlined"
          >
            Add information
          </AppButton>
          {!!fields.length && (
            <List>
              {fields.map((field, index) => (
                <ListItem
                  key={field.id}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 4fr 1fr',
                    justifyItems: 'center',
                    padding: '0',
                    gap: '0.5rem',
                  }}
                >
                  <Input
                    size="small"
                    {...register(`info.${index}.title`)}
                    placeholder="Enter the title"
                  />
                  <Input
                    size="small"
                    {...register(`info.${index}.description`)}
                    placeholder="Enter the description of information"
                  />
                  <AppButton type="button" btnAction={() => remove(index)}>
                    <ClearIcon />
                  </AppButton>
                </ListItem>
              ))}
            </List>
          )}

          <AppButton type="submit">Create</AppButton>
        </form>
      </Box>
    </Modal>
  );
};

export default DeviceModal;
