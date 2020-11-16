import React from "react"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { Formik, Form } from 'formik'
import { useLazyQuery } from '@apollo/react-hooks'
import { css } from "aphrodite/no-important"
import { loginQuery } from '../apollo/queries/login'
import validateForm from '../utils/validate'
import { Loading, MainLayout, HeaderForm, AuthForm } from "../Components"
import loginStyles from '../styles/login'
import withApollo from "../lib/withApollo"
import { userActions, modalActions } from '../redux/actions'

const Login: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [ userData, { loading, data, error } ] = useLazyQuery( loginQuery )
  const initialValues = { email: '', password: '' }
  const validate = values => {
    let errors = {}
    validateForm({ values, errors })
    return errors
  }
  const onSubmit = (values, onSubmitProps) => {
    userData({
      variables: { email: values.email, password: values.password },
    })
    onSubmitProps.setSubmitting(false)
  }
  if (loading) return <Loading />
  if (error) {
    dispatch(modalActions.showModal('Неправильний логін або пароль'))
  }
  if (data) {
    const { login } = data
    dispatch(userActions.setData(login))
    localStorage.setItem('userData', JSON.stringify({
      userId: login.userId, token: login.token, name: login.name, avatar: login.avatar, email: login.email
    }))
    dispatch(modalActions.showModal('Ви успішно увійшли!'))
    router.push('/').then(r => r)
  }

  const dataForm = [
    {
      control: 'input',
      id: 'email',
      type: 'email',
      label: 'Введіть email'
    },
    {
      control: 'input',
      id: 'password',
      type: 'password',
      label: 'Введіть пароль'
    }
  ]

  return <MainLayout title='Вхід' auth={ true } >
    <section className={ css(loginStyles.wrapper) }>
      <HeaderForm title='Вхід' text='У вас ще нема акаунта?' link='/registration' btn='Створити' />
      <Formik initialValues={ initialValues } onSubmit={ onSubmit } validate={ validate } >
        {formik => {
          return <Form>
            <AuthForm formik={ formik } dataForm={ dataForm } btn='Увійти' />
          </Form>
        }}
      </Formik>
    </section>
  </MainLayout>
}

export default withApollo(Login)