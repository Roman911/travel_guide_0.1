import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useFormik } from 'formik'
import { useLazyQuery } from '@apollo/react-hooks'
import { css } from "aphrodite/no-important"
import { loginQuery } from '../apollo/queries/login'
import validateForm from '../utils/validate'
import { Button, Loading, MainLayout, Input } from "../Components"
import loginStyles from '../styles/login'
import withApollo from "../lib/withApollo"
import { userActions, modalActions } from '../redux/actions'

const Login: React.FC = () => {
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
          <Input id="email" type="text" head='Введіть email' errors={ errors.email } touched={ touched.email } values={ values.email } handleChange={ handleChange } handleBlur={ handleBlur } />
          <Input id="password" type="password" head='Введіть пароль' errors={ errors.password } touched={ touched.password } values={ values.password } handleChange={ handleChange } handleBlur={ handleBlur } />
          <div className={ css(loginStyles.inputSub) }>
            <Button
              type="submit"
              nameBtn='Увійти'
              isSubmitting={ isSubmitting }
            />
          </div>
        </div>
      </form>
      <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
        <span className={css(loginStyles.text)}>Новий користувач? </span>
        <Link href={ "/registration" }>
          <a>
            <span className={css(loginStyles.link)}>Створити акаунт.</span>
          </a>
        </Link>
      </div>
    </section>
  </MainLayout>
}

export default withApollo(Login)