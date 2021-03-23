import React from 'react';
import { FormikInput, InputProps } from '../../models/formik';

interface FormikTextSelectProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<any>): void;
  value?: string;
}

export const Select = (props: FormikTextSelectProps) => {
  const { error, optionArr } = props;

  return (
    <>
      <label>Country</label>
      <select id='location' {...props}>
        <option>Choose..</option>
        {optionArr.map((v: any) => {
          return <option value={v.name}>{v.name}</option>;
        })}
      </select>
      {!!error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  );
};
