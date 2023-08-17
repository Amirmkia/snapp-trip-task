import { useState } from 'react';



const useForm = ({ initialValues, onSubmit, validate }: FormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));

    if (validate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validate({ ...values, [name]: value })[name]
      }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
    }));

    if (validate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validate(values)[name]
      }));
    }
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
    handleChange,
    handleBlur,
    handleSubmit
  };
};

export default useForm;