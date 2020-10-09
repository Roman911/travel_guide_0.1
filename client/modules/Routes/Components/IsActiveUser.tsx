import React from "react"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"

import { Avatar } from "../../../Components"
import baseStyles from '../../../styles'

export const IsActiveUser = ({ data }) => {
  return <div className={ css(baseStyles.flex) }>
    <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>
    <Avatar name={ data.name } avatar={ data.avatar } size='S' />
  </div>
}