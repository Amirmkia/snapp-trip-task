import CustomEmailInput from "../../components/emailInput";
import CustomTextInput from "../../components/textInput";
import useForm from "../../hooks/formControlles/useForm";
import { validationSchema } from './utilities/validationschema/index';


const initialValues = {
  email: "",
  password: "",
};


const validate = (values: FormValues) => {
 return validationSchema
};

const LoginForm = () => {
  const onSubmit = (values: FormValues) => {
    console.log("values", values);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useForm({ initialValues, onSubmit, validate });

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <CustomEmailInput
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />
      <label>Password:</label>
      <CustomTextInput
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
