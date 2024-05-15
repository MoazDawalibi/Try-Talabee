import * as Yup from 'yup';


export const GenderOption = [
  {value:'male',label:'Male'},
  {value:'female',label:'Female'},
]

export const getLoginInitialValues = () => {
    return ({
        phone: '',
        password: '',
      })
    }

export const getRegisterInitialValues = () => {
    return ({
        name: 'moaz', 
        email: "moaz@gmail.com",
        password: 'moaz',
        phone:"1234", 
        birthday:"2024-10-17", 
        gender:"male" 
        })
    }




export const getLoginValidationSchema = () => {
    return Yup.object({
      phone: Yup.string().required("Phone number is required"),
      password: Yup.string().required("Password is required"),
    })
  }

  
export const getRegisterValidationSchema = () => {
    return Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      password: Yup.string().required("Password is required"),
    })
  }
  
  
