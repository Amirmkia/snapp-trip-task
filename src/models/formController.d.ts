interface IFormValues {
  [key: string]: string;
  };
  
interface IFormErrors {
  [key: string]: string;
  };
  
interface IFormTouch {
  [key: string]: boolean;
  };
  
interface FormProps  {
  initialValues: IFormValues;
  onSubmit: (values: IFormValues) => void;
  validate?: (values: IFormValues) => IFormErrors;
  };

