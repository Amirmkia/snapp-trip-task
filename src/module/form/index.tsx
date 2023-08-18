import useForm from "../../hooks/formControlles/useForm";
import { validate } from "./utilities/validationschema/index";
import { initialValues } from "./utilities/initialValues/index";
import { onSubmit } from "./utilities/onSubmit/index";
import CustomEmailInput from "../../components/emailInput";
import CustomTextInput from "../../components/textInput";

const LoginForm = () => {
  const { values, errors, touched, handleChanged, handleBluer, handleSubmit } =
    useForm({ initialValues, onSubmit, validate });

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <CustomEmailInput
        values={values}
        handleChange={handleChanged}
        handleBluer={handleBluer}
        errors={errors}
        touched={touched}
      />

      <label>Password:</label>
      <CustomTextInput
        values={values}
        handleChange={handleChanged}
        handleBluer={handleBluer}
        errors={errors}
        touched={touched}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
