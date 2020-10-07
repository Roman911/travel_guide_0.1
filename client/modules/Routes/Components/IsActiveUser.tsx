import React from "react"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"

import baseStyles from '../../../styles'

export const IsActiveUser = () => {
  return <div className={ css(baseStyles.flex) }>
    <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>

  </div>
}