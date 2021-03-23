import React from 'react';
import { FormikInput, InputProps } from '../../models/formik';

export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}

export const Input = (props: FormikTextInputProps) => {
  const { label, error } = props;

  return (
    <div>
      <label htmlFor=''>
        <span>{label}</span>
        <input {...props} />
        {!!error && <div style={{ color: 'red' }}>{error}</div>}
      </label>
    </div>
  );
};
