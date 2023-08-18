
interface FormValues {
    [key: string]: string;
  };
  
interface FormErrors {
    [key: string]: string;
  };
  
interface FormTouched {
    [key: string]: boolean;
  };
  
interface FormProps  {
    initialValues: FormValues;
    onSubmit: (values: FormValues) => void;
    validate?: (values: FormValues) => Yup.ObjectSchema;
  };

