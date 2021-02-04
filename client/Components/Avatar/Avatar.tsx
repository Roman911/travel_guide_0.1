import React from 'react'
import { css } from "aphrodite/no-important"
import baseStyles from "../../styles"
import styles from "./styles"
import { Images } from "../Images/Images"

type MyAvatarProps = {
  avatar: string
  name: string
  size: string
}

export const Avatar = ({ avatar, name , size }: MyAvatarProps) => {
  const avatarIcon = avatar !== 'undefined' ?
    <Images link={ `/assets/uploads${ avatar }` } styles={ styles.imgAv } alt='avatar' width={ 100 } height={ 100 } /> :
    <p>{ name[0].toUpperCase() }</p>

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
  return <div className={ css(styles.imgAv, avatarSize, baseStyles.flex, styles.background) }>
    { avatarIcon }
  </div>
}