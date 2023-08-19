import React from 'react';
import { useState, useCallback,useMemo} from 'react';
import { ValidationError } from 'yup';
import _ from "lodash"
const useForm = <T extends TFormsValues>({
  initialValues,
  validation,
  onSubmit,
}: TUseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<TFormErrors>({});
  const valuesRef = React.createRef(); 
  const PromiseValidationForm = useCallback(async () => {
    try {
      await validation?.validate(values, { abortEarly: false });
      setErrors({});
    } catch (error)
     {
      const validationErrors:TFormErrors = {};
      (error as ValidationError)?.inner?.forEach((error) => {
        if (error.path) {
         validationErrors[error.path] = error.message;
        }
      });
    
     setErrors(validationErrors)
    }
  },[values,validation]) 

  const handleChange = useCallback((e:  TFormInputEvent) => {
    //@ts-ignore
    const {name, value, type, checked} = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    
    setValues((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validation) {
      PromiseValidationForm().then((res) => {
          if (_.isEmpty(errors)) {
            onSubmit(values);
          }
        }).catch((err)=>console.log(err,'error'))
    } else {
      onSubmit(values)
    }

  }, [ onSubmit, values, errors, validation, PromiseValidationForm]);

  const cachedValues = useMemo(() => { 
    return values
}, [values]);

const cachedErrors = useMemo(() => { 
  return errors
}, [errors]);

 return {
    values: cachedValues,
    errors: cachedErrors,
    valuesRef,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
