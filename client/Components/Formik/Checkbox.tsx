import React from "react"
import { Field } from 'formik'
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../styles'
import styles from "./styles"

type CheckboxProps = {
  id: string
  label: string
  value: string
  values: any
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, value, values }) => {
  return <label className={ css(styles.text, styles.checkbox, baseStyles.flex) }>
    <Field type='checkbox' value={ value } name={ id } />
    <div className={ css(styles.checkboxInner, baseStyles.flexSB, values[0] === 'free' ? styles.checkboxInnerActive : null) } >
      <FontAwesomeIcon className={ css(styles.iconCheck, baseStyles.flexSB) } icon={ faCheck } />
    </div>
    { label }
  </label>
}