import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { FormikTextInputProps, Input } from '../input/input';
import { Checkbox } from '../checkbox/checkbox';
import { Radio } from '../radio/radio';
import { Select } from '../select/select';

export const FormikInput = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;
  return <Input {...field} {...props} error={error} />;
};

export const FormikCheckbox = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;
  return <Checkbox {...field} {...props} error={error} />;
};

export const FormikRadio = (props: FormikTextInputProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;
  return <Radio {...field} {...props} error={error} />;
};

export const FormikSelect = (props: FormikTextInputProps) => {
  const [countries, setCountries] = useState<any>([{ name: '' }]);
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;

  const getCities = async () => {
    const location = await fetch('https://restcountries.eu/rest/v2/all').then(r => r.json());
    setCountries(location);
  };

  useEffect(() => {
    getCities();
  }, []);
  return <Select {...field} {...props} error={error} optionArr={countries} />;
};
