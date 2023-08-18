import { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }: FormProps) => {
  const [values, setValues] = useState<IFormValues>(initialValues);
  const [errors, setErrors] = useState<IFormErrors>({});
  const [touched, setTouched] = useState<IFormTouch>({});

  const handleChanged = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBluer = (name: string) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate) {
      const newErrors = validate(values);
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) {
        return;
      }
    }
    onSubmit(values);
  };

  return {
    values,
    errors,
    touched,
    handleChanged,
    handleBluer,
    handleSubmit,
  };
};

export default useForm;
