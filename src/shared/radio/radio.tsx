import React from 'react';
import { FormikTextInputProps } from '../input/input';

export const Radio = (props: FormikTextInputProps) => {
  const { label, error } = props;

  return (
    <div>
      <label>
        <input type='radio' {...props} />
        <span>{label}</span>
        {!!error && <div style={{ color: 'red' }}>{error}</div>}
      </label>
    </div>
  );
};
