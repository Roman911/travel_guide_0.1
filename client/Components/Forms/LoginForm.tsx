import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import loginStyles from "../../styles/login"
import { Button, Input } from ".."

type LoginFormProps = {
  formik: any
}

export const LoginForm: React.FC<LoginFormProps> = ({ formik }) => {
  return <div className={ css(loginStyles.wrapperForm) }>
    <Input id="email" type="text" head='Введіть email' errors={ formik.errors.email } touched={ formik.touched.email } value={ formik.values.email } />
    <Input id="password" type="password" head='Введіть пароль' errors={ formik.errors.password } touched={ formik.touched.password } value={ formik.values.password } />
    <div className={ css(loginStyles.inputSub) }>
      <Link href={ '/' }>
        <a className={ css(loginStyles.resPassword) }>Забули пароль?</a>
      </Link>
      <Button type="submit" nameBtn='Увійти' isSubmitting={ formik.isSubmitting } />
    </div>
  </div>
}