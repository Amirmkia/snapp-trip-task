
import useForm from '../../hooks/formControlles/useForm';

const initialValues = {
  email: '',
  password: ''
};

const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

const LoginForm = () => {
  const onSubmit = (values: FormValues) => {
    console.log("values" , values)
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm({ initialValues, onSubmit, validate });

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        onBlur={() => handleBlur('email')}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={(e) => handleChange('password', e.target.value)}
        onBlur={() => handleBlur('password')}
      />
      {touched.password && errors.password && <span>{errors.password}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;