import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  birthday: string;
  gender: string;
}


export const getInitialValues = (): FormValues => {
  return {
    name: "name",
    email: "email@em.cp",
    phone: "3333333333",
    country: "syria",
    password: "***************",
    birthday: "birthday",
    gender: "gender",
  }
}

