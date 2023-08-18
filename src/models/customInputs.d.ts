interface ICustomInputProps {
    values: FormValues;
    handleChange: (name: string, value: string) => void;
    handleBlur: (name: string) => void;
    errors: FormErrors;
    touched: FormTouched;
  }
  