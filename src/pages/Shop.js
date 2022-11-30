import React, { useState, useEffect } from 'react';
import TypeBar from '../Components/TypeBar';
import GoodItem from '../Components/GoodItem';
import Paginations from '../Components/Paginations';
import AppButton from '../Components/AppButton';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useSelector, useDispatch } from 'react-redux';
import {
  setBrands,
  setDevices,
  setTotalCount,
  setTypes,
} from '../redux/slices/deviceSlice';

import { deviceApi } from '../api/deviceApi';
import { DEVICES_LIMIT } from '../utils/constants';
import NavForm from '../Components/NavForm/component';

const Shop = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { devices, selectedType, page } = useSelector((state) => state.device);
  const dispatch = useDispatch();
  //The condition for render TypeBar or Button that show or hide filters
  const matches = useMediaQuery('(min-width:600px)');

  useEffect(() => {
    //fetching devices with args
    //1 - is typeId
    //2 - is brandId
    //3 - current page that we upload
    //4 - limit of devices that we show (default is 8)
    deviceApi.getDevices(null, null, 1, DEVICES_LIMIT).then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setTotalCount(data.count));
    });

    // useEffect(() => {
    //   console.log(matches);
    // }, [matches]);

    //fetching types and adding to the store
    deviceApi.getTypes().then((data) => dispatch(setTypes(data)));
    deviceApi.getBrands().then((data) => dispatch(setBrands(data)));
  }, []);

  useEffect(() => {
    // on each changing we fetch it again
    deviceApi
      .getDevices(selectedType.id, null, page, DEVICES_LIMIT)
      .then((data) => {
        dispatch(setDevices(data.rows));
        dispatch(setTotalCount(data.count));
      });
  }, [selectedType, page]);

  const handleClose = () => setIsFiltersOpen(false);

  return (
    <Container>
      <Grid
        container
        wrap="nowrap"
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ padding: '80px 0 60px 0', gap: '1rem' }}
      >
        <Grid item xs={4}>
          {matches ? (
            <TypeBar />
          ) : (
            <AppButton btnAction={() => setIsFiltersOpen(true)}>
              Filters
            </AppButton>
          )}
        </Grid>
        <Grid item xs={12}>
          <Grid item container spacing={1}>
            {devices?.map((device) => (
              <GoodItem {...device} key={device.id} />
            ))}
          </Grid>
          <Paginations />
        </Grid>
      </Grid>
      <NavForm isFiltersOpen={isFiltersOpen} handleClose={handleClose} />
    </Container>
  );
};

export default Shop;
