import * as Yup from 'yup';


export const GenderOption = [
  {value:1,label:'Male'},
  {value:2,label:'Female'},
]

export const getLoginInitialValues = () => {
    return ({
        phone: '',
        password: '',
      })
    }

export const getRegisterInitialValues = () => {
    return ({
        name: '', 
        email: "",
        password: '',
        country:"",
        phone:"", 
        birthday:"", 
        gender:"" 
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
  
  
