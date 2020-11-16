import React from "react"
import { Field, ErrorMessage } from 'formik'
import { css } from "aphrodite/no-important"
import { TextError } from ".."
import styles from "./styles"

type InputProps = {
  id: string
  type: string
  label: string
}

export const Input: React.FC<InputProps> = ({ id, type, label}) => {
  return <div className={ css(styles.inputWrapper) }>
    <Field id={ id } name={ id }>
      {({ field, form: { touched, errors }, ...rest }) => {
        const { value } = field
        return <>
          <label className={ css(styles.label, value !== '' ? styles.labelTouched : null) } htmlFor={ id }>{ label }</label>
          <input type={type} {...field} {...rest} />
          { touched[field.name] && errors[field.name] && <p className={ css(styles.icon) }>!</p> }
        </>
      }}
    </Field>
    <ErrorMessage name={ id } className='left' component={ TextError } />
  </div>
}