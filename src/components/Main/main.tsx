import { Formik, Form, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  FormikCheckbox,
  FormikInput,
  FormikRadio,
  FormikSelect
} from '../../shared/formikAdapters/FormikAdapters';
import { UserFromSchemas } from '../../utils/validation-schemas';

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  address2: string;
  country: string;
  zip: string;
  state: string;
  checked: string[] | [];
  picked: string;
}

const defaultValues: IValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  address2: '',
  country: '',
  zip: '',
  state: '',
  checked: [],
  picked: ''
};

function Main() {
  return (
    <div>
      <Formik
        initialValues={defaultValues}
        onSubmit={val => {
          console.log(val);
        }}
        validationSchema={UserFromSchemas}
      >
        <Form>
          <FormikInput name='firstName' label='First Name' />
          <FormikInput name='lastName' label='Last Name' />
          <FormikInput name='email' label='Email' />
          <FormikInput name='address' label='Address' />
          <FormikInput name='address2' label='Address 2' />
          <FormikSelect name='country' />
          <FormikInput name='state' label='State' />
          <FormikInput name='zip' label='ZIP' />
          <FormikCheckbox
            name='checked'
            label='Shipping address is the same my billing address'
            value='SHIPPING_ADDRESS_IS_SAME_BILLING'
          />
          <FormikCheckbox
            name='checked'
            label='Save this information fir the next time'
            value='SAVE_INFORMATION'
          />
          <FormikRadio name='picked' value='Credit_Card' label='Credit Card' />
          <FormikRadio name='picked' value='Debit_Card' label='Debit Card' />
          <FormikRadio name='picked' value='Paypal' label='Paypal' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
