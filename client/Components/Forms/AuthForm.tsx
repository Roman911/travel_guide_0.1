import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import loginStyles from "../../styles/login"
import { Button, FormikControl } from ".."

type AuthFormProps = {
  formik: any
  dataForm: any
  btn: string
}

export const AuthForm: React.FC<AuthFormProps> = ({ formik, dataForm, btn }) => {

  const inputs = dataForm.map((item, index) => {
    const id = item.id
    return <FormikControl
      key={ index }
      control={ item.control }
      id={ id }
      type={ item.type }
      label={ item.label }
    />
  })

  return <div className={ css(loginStyles.wrapperForm) }>
    { inputs }
    <div className={ css(loginStyles.inputSub, btn !== 'Увійти' ? loginStyles.inputSubRegister : null) }>
      { btn === 'Увійти' ? <Link href={ '/' }>
        <a className={ css(loginStyles.resPassword) }>Забули пароль?</a>
      </Link> : null }
      <Button type="submit" nameBtn={ btn } isSubmitting={ formik.isSubmitting } />
    </div>
  </div>
}