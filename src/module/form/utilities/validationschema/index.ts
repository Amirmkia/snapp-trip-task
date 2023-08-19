import { boolean, object, string } from "yup";
export const validation = object({
    first_name: string().required("FirstName is required"),
    last_name: string().required("LastName is required"),
    email: string().email("Email is Invalid").required("Email is required"),
    password: string().required("Password is required").min(8 , "Use over 8 character for your password"),
    ourRole: boolean(),
  });