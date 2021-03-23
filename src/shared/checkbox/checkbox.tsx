import React from 'react';
import { FormikTextInputProps } from '../input/input';

export const Checkbox = (props: FormikTextInputProps) => {
  const { label, error } = props;

  console.log(props);

  return (
    <div>
      <label>
        <input type='checkbox' {...props} />
        <span>{label}</span>
        {!!error && <div style={{ color: 'red' }}>{error}</div>}
      </label>
    </div>
  );
};
