import React from 'react';
import { Formik, Form } from 'formik';

import {
  setFilterByCondition,
  setSortByCondition,
} from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux/es/exports';

import Btn from '../Button/component';

const NavForm = () => {
  const brands = ['Samsung', 'Apple', 'Xiaomi', 'Sony', 'Motorola'];

  const dispatch = useDispatch();

  const sortOnclick = (value) => {
    dispatch(setSortByCondition(value));
  };

  const filterOnClick = (item) => {
    dispatch(setFilterByCondition(item));
  };

  return (
    <>
      <Formik initialValues={{ password: '' }} onSubmit={() => {}}>
        <Form className="form">
          <section>
            <div className="sorters">
              <Btn
                btnAction={() => {
                  sortOnclick('desc');
                }}
              >
                Max price first
              </Btn>
              <Btn
                btnAction={() => {
                  sortOnclick('asc');
                }}
              >
                Min price first
              </Btn>
              //========================================
              {Array.from(brands).map((item, index) => {
                return (
                  <Btn
                    key={index}
                    btnAction={() => {
                      filterOnClick(item);
                    }}
                  >
                    {item}
                  </Btn>
                );
              })}
              //========================================
            </div>
          </section>
        </Form>
      </Formik>
    </>
  );
};

export default NavForm;
