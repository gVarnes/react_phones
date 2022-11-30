import * as yup from 'yup';

export const authSchema = yup
  .object({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })
  .required();

export const deviceSchema = yup.object({
  typeId: yup.string().required('Type is required'),
  brandId: yup.string().required('Brand is required'),
  name: yup
    .string()
    .min(2, 'Must be at least 2 characters long')
    .required('Name is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .positive('Number should be positive')
    .required('Field is required'),
  img: yup.mixed().required('Image is required'),
  info: yup.array(
    yup.object({
      title: yup
        .string()
        .min(2, 'Must be at least 2 characters long')
        .required('Title is required'),
      description: yup
        .string()
        .min(2, 'Must be at least 2 characters long')
        .required('Description is required'),
    })
  ),
});
