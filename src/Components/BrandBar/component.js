import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const BrandBar = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.device);

  return <div>BrandBar</div>;
};

export default BrandBar;
