export const validate = (values: IFormValues) => {
 
  const errors: IFormErrors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};