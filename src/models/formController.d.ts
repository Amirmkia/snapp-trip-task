type TFormsValues ={
  [key: string]: any;
}

type TFormErrors = {
  [key: string]: string;
};


type TFormInputEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

type TUseFormProps<T extends TFormsValues> ={
  initialValues: T;
  validation?: ObjectSchema<T>;
  onSubmit: (values: T) => void;
}