interface ICustomInputProps {
    values: FormValues;
    handleChange: (name: string, value: string) => void;
    handleBluer: (name: string) => void;
    errors: FormErrors;
    touched: FormTouched;
  }
  