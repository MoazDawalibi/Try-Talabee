import { Field, Form, Formik, useFormikContext } from 'formik'
import React, { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../api/auth';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//@ts-ignore
import countryList from 'react-select-country-list'
//@ts-ignore
import { toast } from 'react-toastify';
import { USER_EMAIL } from '../../config/AppKey';
import AuthHeader from './HeaderComponent';
import { GenderOption, getRegisterInitialValues, getRegisterValidationSchema } from './FormUtils';
import { DatePicker,Select } from 'antd';
import TalabeeField from '../../Components/Utils/TalabeeField/TalabeeField';

function RegisterForm({ handleLoginClick }: any) {
  const navigate = useNavigate()
  const { mutate, isSuccess, data , isLoading } = useRegister()
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handelSubmit = (values: any) => {
    mutate(
      {
        name: values['name'],
        email: values['email'],
        password: values['password'],
        phone: values['phone'],
        birthday: values['birthday'],
        gender: values['gender'],
      }
    )
      // navigate('/verfied', { replace: true })

   return localStorage.setItem(USER_EMAIL , values.email );
  }


  // useEffect(() => {
  //   if (isSuccess) {
  //     // dispatch(register((data as any)?.data))
      
  //     navigate('/verfied', { replace: true })
  //   }
  // }, [isSuccess, navigate, data , dispatch])


  const options = useMemo(() => countryList().getData(), [])
  const formik = useFormikContext();
  

  const SelecthandleChange = (value:any,label:any) => {

    setValue(label?.label)

 };
 const form = useRef<any>(null);



  return (
    <div className="form-container sign-up">
      <Formik
        initialValues={getRegisterInitialValues()}
        validationSchema={getRegisterValidationSchema()}
        onSubmit={handelSubmit}
      >
        {({ errors, touched }) => (
        <Form ref={form}>
          
        <AuthHeader/>
        <h2>{t("Create Account")}</h2>
        <div className='login_dev'>
          <TalabeeField name="name"  placeholder={t("Name")} />
        </div>

        <div className='login_dev'>
          <TalabeeField name="email"  placeholder={t("Email")} />
        </div>

        <div className='login_dev'>
          <TalabeeField name="phone"  placeholder={t("Phone")} />
        </div>

        <div className='login_dev'>
          <TalabeeField name="password"  placeholder={t("password")} />
        </div>
        <div className='login_dev birth_gender'>
          <DatePicker name="birthday" type="birthday" className='date_picker' placeholder={t("Birthday")} />
          <TalabeeField  type='Select'  name='type'  option={GenderOption}  placeholder='Gender'  />
        </div>

        <LoadingButton isLoading={isLoading} type="submit">{t("Sign Up")}</LoadingButton >
        <p className='navigateto' onClick={handleLoginClick} >{t("or login")}</p>

      </Form>
      )}
      </Formik>

    </div>
  )
}

export default RegisterForm