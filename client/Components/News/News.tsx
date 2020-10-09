import React from 'react'
import Link from "next/link"
import { css } from 'aphrodite/no-important'
import { AuthorPost, ArticleStats } from ".."

import baseStyles from '../../styles'
import styles from './styles'

import { Item } from '../../types/news'
import { Likes } from "../../modules"
type MyNewProps = {
  item: Item,
  comments: string[]
}

export const News: ({item, comments}: MyNewProps) => any = ({ item, comments }): any => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Link href={`/post/${ item._id }`}>
        <img className={ css(styles.img) } src={ item.coverNews } alt=""/>
      </Link>
      <div className={ css(styles.block) }>
        <AuthorPost isArticle={ false } author={ item.author } date={ item.createdAt } />
        <Link href={`/post/${ item._id }`} >
          <div className={ css(baseStyles.block, baseStyles.blockText) }>
            <h3>{ item.title }</h3>
            <p>{ item.small_text }</p>
            <div className={ css(baseStyles.shadow) } />
          </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
        <ArticleStats isArticle={ false } views={ item.views } comments={ comments } />
        <Likes likes={ item.likes } id={ item._id } post={ false } />
      </div>
    </div>
  </div>
}