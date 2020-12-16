import React from 'react'
import { css } from "aphrodite/no-important"

import { Avatar, NameUser, Date } from "../"
import baseStyles from "../../styles/"
import styles from "./styles"

type MyAuthorPostProps = {
  isArticle: boolean
  author: { avatar: string, name: string }
  date: string
}

export const AuthorPost = ({ isArticle, author, date }: MyAuthorPostProps) => {
  const { avatar, name } = author

  return <div className={css(baseStyles.flexSB, baseStyles.block)}>
    <div className={css(baseStyles.flex)}>
      <Avatar avatar={ avatar } name={ name } size='S' />
      <div className={css(!isArticle ? styles.blockName : styles.isArticle)}>
        <NameUser name={ name } />
        { isArticle && <div className={ css(styles.separator) } /> }
        <Date date={ date } format='LL'/>
      </div>
    </div>
  </div>
}