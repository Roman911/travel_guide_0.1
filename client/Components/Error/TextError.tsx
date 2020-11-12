import React from "react"
import { css } from "aphrodite/no-important"
import baseStyles from '../../styles'
import styles from './styles'

export const TextError = props => {
  return <div className={ css(baseStyles.boxShadow, styles.wrapper) }>
    { props.children }
    <div className={ css(styles.triangle) }/>
  </div>
}