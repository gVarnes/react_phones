import React from 'react';

const Input = ({ type, name, field, form }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      ></input>
    </>
  );
};

export default Input;
