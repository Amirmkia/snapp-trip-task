import useForm from "../../hooks/formControlles/useForm";
import { RefObject } from "react";
import { CustomTextInput } from "../../components/textInput";
import { validation } from "./utilities/validationschema/index";
import { initialValues } from './utilities/initialValues/index';
import { onSubmit } from './utilities/onSubmit/index';
import CustomButton from "../../components/customButton";


const LoginForm = () => {
  const { values, errors, valuesRef, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validation,
  });

  return (
    <form onSubmit={handleSubmit} className=" w-[430px]">
      <div className=" py-8 px-6 bg-white rounded-md" >

      <CustomTextInput
        type="text"
        label="username"
        name="first_name"
        value={valuesRef.current}
        ref={valuesRef.current as RefObject<HTMLInputElement>}
        onChange={handleChange}
        error={errors.first_name}
      />
      <CustomTextInput
        type="text"
        label="last_name"
        name="last_name"
        value={valuesRef.current}
        ref={valuesRef.current as RefObject<HTMLInputElement>}
        onChange={handleChange}
        error={errors.last_name}
      />
      <CustomTextInput
        type="email"
        label="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <CustomTextInput
        type="password"
        label="password"
        name="password"
        value={values.password}
        ref={valuesRef.current as RefObject<HTMLInputElement>}
        onChange={handleChange}
        error={errors.password}
      />
      <CustomTextInput
        type="checkbox"
        label="ourRole"
        name="agreement"
        value={values.ourRole}
        onChange={handleChange}
        error={errors.ourRole}
      />

      <CustomButton />
      </div>
    </form>
  );
};

export default LoginForm;
