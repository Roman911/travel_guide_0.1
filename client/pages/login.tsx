import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useDispatch } from "react-redux"

import { useFormik } from 'formik'
import { useLazyQuery } from '@apollo/react-hooks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"

import { loginQuery } from '../apollo/queries/login'
import validateForm from '../utils/validate'

import { Button, Loading, MainLayout } from "../Components"
import baseStyles from '../styles'
import loginStyles from '../styles/login'
import inputStyles from '../styles/forImput'
import withApollo from "../lib/withApollo"

import { userActions, modalActions } from '../redux/actions'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [ userData, { loading, data, error } ] = useLazyQuery( loginQuery )
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, setSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      let errors = {}
      validateForm({ values, errors })
      return errors
    },
    onSubmit: values => {
      userData({
        variables: {email: values.email, password: values.password},
      })
      setSubmitting(false)
    },
  })

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

  return <MainLayout title='Login'>
    <section className={ css(loginStyles.wrapper) }>
      <Link href='/'>
        <a>
          <div className={css(loginStyles.logo)}/>
        </a>
      </Link>
      <h1 className={css(loginStyles.title)}>Sign in to Travel Guide</h1>
      <form onSubmit={ handleSubmit }>
        <div className={ css(loginStyles.wrapperForm) }>
          <p className={ css(inputStyles.textP) }>Введіть свій email</p>
          <div className={ css(inputStyles.inputWrapper) }>
            <input
              id="email"
              className={ errors.email && touched.email ? css(inputStyles.input, inputStyles.inputUser, inputStyles.error) : css(inputStyles.input, inputStyles.inputUser) }
              type="text"
              value={ values.email }
              onChange={ handleChange }
              onBlur={ handleBlur }
            />
            {
              touched.email && ( errors.email ? <FontAwesomeIcon className={ css(baseStyles.icon, inputStyles.icon, inputStyles.errorColor) } icon={ faExclamationCircle }/> :
                <FontAwesomeIcon className={ css(baseStyles.icon, inputStyles.icon, inputStyles.isOkColor) } icon={ faCheckCircle }/>)
            }
          </div>
          {errors.email &&
          touched.email && (
            <div className="input-feedback">{ errors.email }</div>
          )}
          <p className={ css(inputStyles.textP) }>Введіть свій пароль</p>
          <div className={ css(inputStyles.inputWrapper) }>
            <input
              id="password"
              className={ errors.password && touched.password ? css(inputStyles.input, inputStyles.inputUser, inputStyles.error) : css(inputStyles.input, inputStyles.inputUser) }
              type="password"
              value={ values.password }
              onChange={ handleChange }
              onBlur={ handleBlur }
            />
            { touched.password && ( errors.password ? <FontAwesomeIcon className={ css(baseStyles.icon, inputStyles.icon, inputStyles.errorColor) } icon={ faExclamationCircle }/> :
              <FontAwesomeIcon className={ css(baseStyles.icon, inputStyles.icon, inputStyles.isOkColor) } icon={ faCheckCircle }/>) }
          </div>
          {errors.password &&
          touched.password && (
            <div className="input-feedback">{ errors.password }</div>
          )}
          <div className={ css(loginStyles.inputSub) }>
            <Button
              type="submit"
              nameBtn='Увійти'
              isSubmitting={ isSubmitting }
            />
          </div>
        </div>
      </form>
    </section>
  </MainLayout>
}

export default withApollo(Login)