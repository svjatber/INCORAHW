import * as Yup from 'yup';

export const UserFromSchemas = Yup.object().shape({
  firstName: Yup.string().min(3, `Minimum 3 chars`).max(10, `Maximum 10 chars`).required(),
  lastName: Yup.string().min(3, `Minimum 3 chars`).max(10, `Maximum 10 chars`).required(),
  email: Yup.string().email().required(),
  address: Yup.string().required('Please enter your shipping address'),
  address2: Yup.string().optional(),
  country: Yup.string().required('Please select your country'),
  state: Yup.string().required('Please provide a valid state'),
  zip: Yup.string().required('ZIP Code is required'),
  checked: Yup.array().of(Yup.string()).optional(),
  picked: Yup.string().optional()
});
