import React from "react"
import { useMutation } from "@apollo/client"
import {Formik, Form} from "formik"
import { useDispatch } from "react-redux"
import { css } from "aphrodite"
import withApollo from "../lib/withApollo"
import { MainLayout, HeaderForm, RegistrationForm } from "../Components"
import { addUserMutation } from "../apollo/mutations/addUser"
import validateForm from '../utils/validate'
import { userActions, modalActions } from "../redux/actions"
import loginStyles from '../styles/login'

const Registration: React.FC = () => {
  const dispatch = useDispatch()
  const [createUse] = useMutation(addUserMutation)
  const initialValues = { name: '', email: '', password: '', password2: '' }
  const validate = values => {
    let errors = {}
    validateForm({ values, errors })
    return errors
  }
  const onSubmit = ( values, onSubmitProps ) => {
    createUse({
      variables: {
        userInput: { name: values.name, email: values.email, password: values.password }
      }
    }).then(data => {
      if (data) {
        // @ts-ignore
        dispatch(userActions.registerData(data))
        dispatch(modalActions.showModal('Користувач успішно створений! Увійдіть в свій акаунт'))
      }
      onSubmitProps.setSubmitting(false)
    }).catch((errors) => {
      if (errors) {
        dispatch(modalActions.showModal('Користувач з таким емейлом зайнятий'))
      }
      onSubmitProps.setSubmitting(false)
    })
  }
  return <MainLayout title='Registration' auth={ true } >
    <section className={css(loginStyles.wrapper)}>
      <HeaderForm title='Реєстрація' text='Вже є акаунт?' link='/login' btn='Авторизуватися' />
      <Formik initialValues={ initialValues } onSubmit={ onSubmit } validate={ validate }>
        {formik => {
          return <Form>
            <RegistrationForm formik={ formik } />
          </Form>
        }}
      </Formik>
    </section>
  </MainLayout>
}

export default withApollo(Registration)