import React from "react"
import { ErrorMessage, Field } from 'formik'
import { css } from "aphrodite/no-important"
import { TextError } from ".."
import styles from "./styles"

type TextAreaProps = {
  name: string
  label: string
}

export const TextArea: React.FC<TextAreaProps> = ({ name, label }) => {
  return <div className={ css(styles.wrapperTextarea) }>
    <Field id={ name } name={ name } >
      {({ field, form, ...rest }) => {
        const { value } = field
        return <>
          <label htmlFor={ name } className={ css(styles.label, styles.labelTextarea, value !== '' ? styles.labelTouched : null) } >{ label }</label>
          <textarea id={ name } name={ name } { ...field } { ...rest } className={ css(styles.textarea) } />
        </>
      }}
    </Field>
    <ErrorMessage name={ name } className='bottom' component={ TextError } />
  </div>
}