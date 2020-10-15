import React from "react"
import { css } from "aphrodite"
import styles from "../../styles/forImput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import baseStyles from "../../styles"
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

type InputProps = {
  id: string
  type: string
  head: string
  errors: undefined | string
  touched: undefined | boolean
  values: string
  handleChange: any
  handleBlur: any
}

export const Input: React.FC<InputProps> = ({ id, type, head, errors, touched, values, handleChange, handleBlur }) => {
  return <>
    <p className={ css(styles.textP) }>{ head }</p>
    <div className={ css(styles.inputWrapper) }>
      <input
        id={ id }
        className={ errors && touched ? css(styles.input, styles.inputUser, styles.error) : css(styles.input, styles.inputUser) }
        type={ type }
        value={ values }
        onChange={ handleChange }
        onBlur={ handleBlur }
      />
      { touched && ( errors ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.errorColor) } icon={ faExclamationCircle }/> :
        <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.isOkColor) } icon={ faCheckCircle }/>) }
    </div>
    {errors &&
    touched && (
      <div className="input-feedback">{ errors }</div>
    )}
  </>
}