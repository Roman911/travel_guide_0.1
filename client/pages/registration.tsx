import React from "react"
import Link from "next/link"
import { useMutation } from "@apollo/client"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { css } from "aphrodite"
import withApollo from "../lib/withApollo"
import { Button, MainLayout, Input } from "../Components"
import { addUserMutation } from "../apollo/mutations/addUser"
import validateForm from '../utils/validate'
import { userActions, modalActions } from "../redux/actions"
import loginStyles from '../styles/login'

const Registration: React.FC = () => {
  const dispatch = useDispatch()
  const [ createUse ] = useMutation(addUserMutation)
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, setSubmitting } = useFormik({
    initialValues: { name: '', email: '', password: '', password2: '' },
    validate: values => {
      let errors = {}
      validateForm({ values, errors })
      return errors
    },
    onSubmit: values => {
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
        setSubmitting(false)
      }).catch((errors) => {
        if (errors) {
          dispatch(modalActions.showModal('Користувач з таким емейлом зайнятий'))
        }
        setSubmitting(false)
      })}
  })
  return <MainLayout title='Registration'>
    <section className={css(loginStyles.wrapper)}>
      <Link href="/">
        <a>
          <div className={css(loginStyles.logo)}/>
        </a>
      </Link>
      <h1 className={css(loginStyles.title)}>Create your account</h1>
      <form onSubmit={handleSubmit} >
        <div className={css(loginStyles.wrapperForm)} >
          <Input id="name" type="text" head='Ведіть імя' errors={ errors.name } touched={ touched.name } values={ values.name } handleChange={ handleChange } handleBlur={ handleBlur } />
          <Input id="email" type="text" head='Ведіть email' errors={ errors.email } touched={ touched.email } values={ values.email } handleChange={ handleChange } handleBlur={ handleBlur } />
          <Input id="password" type="password" head='Придумайте пароль' errors={ errors.password } touched={ touched.password } values={ values.password } handleChange={ handleChange } handleBlur={ handleBlur } />
          <Input id="password2" type="password" head='Повторіть пароль' errors={ errors.password2 } touched={ touched.password2 } values={ values.password2 } handleChange={ handleChange } handleBlur={ handleBlur } />
          <div className={ css(loginStyles.inputSub) }>
            <Button type="submit" nameBtn='Створити акаунт' isSubmitting={ isSubmitting } />
          </div>
        </div>
      </form>
      <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
        <span className={css(loginStyles.text)}>Вже є акаунт? </span>
        <Link href={ "/login" }><a><span className={css(loginStyles.link)}>Увійти в Travel.</span></a></Link>
      </div>
    </section>
  </MainLayout>
}

export default withApollo(Registration)