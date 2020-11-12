import React from "react"
import { css } from "aphrodite/no-important"
import loginStyles from "../../styles/login"
import { Button, Input } from ".."

type LoginFormProps = {
  formik: any
}

export const RegistrationForm: React.FC<LoginFormProps> = ({ formik }) => {
  return <div className={ css(loginStyles.wrapperForm) }>
    <Input id="name" type="text" head='Ведіть імя' errors={ formik.errors.name } touched={ formik.touched.name } value={ formik.values.name } />
    <Input id="email" type="text" head='Ведіть email' errors={ formik.errors.email } touched={ formik.touched.email } value={ formik.values.email } />
    <Input id="password" type="password" head='Придумайте пароль' errors={ formik.errors.password } touched={ formik.touched.password } value={ formik.values.password } />
    <Input id="password2" type="password" head='Повторіть пароль' errors={ formik.errors.password2 } touched={ formik.touched.password2 } value={ formik.values.password2 } />
    <div className={ css(loginStyles.inputSub) }>
      <Button type="submit" nameBtn='Створити акаунт' isSubmitting={ formik.isSubmitting } />
    </div>
  </div>
}