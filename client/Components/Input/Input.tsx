import React from "react"
import { Field, ErrorMessage } from 'formik'
import { css } from "aphrodite/no-important"
import styles from "../../styles/forImput"
import { TextError } from ".."

type InputProps = {
  id: string
  type: string
  head: string
  errors: any
  touched: any
  value: any
}

export const Input: React.FC<InputProps> = ({ id, type, head, errors, touched, value }) => {
  return <>
    <div className={ css(styles.inputWrapper) }>
      <label className={ css(styles.label, value !== '' ? styles.labelTouched : null) } htmlFor={ id }>{ head }</label>
      <Field
        id={ id }
        name={ id }
        type={ type }
      />
      <ErrorMessage name={ id } component={ TextError } />
      { touched && (errors ? <p className={ css(styles.icon) } >!</p> : null) }
    </div>
  </>
}