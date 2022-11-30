import React from 'react';
import { Pagination } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../redux/slices/deviceSlice';

const Paginations = () => {
  const { totalCount, limit } = useSelector((state) => state.device);
  const dispatch = useDispatch();
  const pages = Math.ceil(totalCount / limit);
  return (
    <Pagination
      sx={{ marginTop: '1rem' }}
      color="primary"
      count={pages}
      onChange={(e, page) => dispatch(setPage(page))}
    />
  );
};

export default Paginations;
