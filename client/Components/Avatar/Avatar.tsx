import React from 'react'
import { css } from "aphrodite/no-important"
import baseStyles from "../../styles"
import styles from "./styles"

type MyAvatarProps = {
  avatar: string
  name: string
  size: string
}

export const Avatar = ({ avatar, name , size }: MyAvatarProps) => {
  const avatarBG: any = () => {
    if (avatar) {
      const background = avatar !== 'undefined' ? { background: `url(${ avatar })`,backgroundSize: 'cover' } : { background: 'linear-gradient(-60deg,#16a085,#f4d03f)' }
      const letter = avatar === 'undefined' && name[0].toUpperCase();
      return { background, letter }
    }
  }

  let avatarSize
  switch (size) {
    case 'S':
      avatarSize = styles.avatarS
      break
    case 'L':
      avatarSize = styles.avatarL
      break
    case 'XL':
      avatarSize = styles.avatarXL
      break
    default:
      return null
  }
  return <div style={ avatarBG().background } className={ css(styles.imgAv, avatarSize, baseStyles.flex, styles.background) }>
    { avatarBG().letter }
  </div>
}