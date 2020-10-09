import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faCommentAlt } from "@fortawesome/free-regular-svg-icons"
import { css } from 'aphrodite/no-important'
import baseStyles from '../../styles'

interface ArticleStatsProps {
  isArticle: boolean
  views: number
  comments: string[]
}

export const ArticleStats = ({isArticle, views, comments}: ArticleStatsProps) => {
  return <div className={css(baseStyles.flex)}>
      <span className={css(baseStyles.views)}>
        <FontAwesomeIcon className={css(baseStyles.iconS)} icon={faEye}/>
        { views }
      </span>
    { !isArticle &&
    <span className={css(baseStyles.comment)}>
      <FontAwesomeIcon className={css(baseStyles.iconS)} icon={faCommentAlt}/>
      { comments.length }
    </span>
    }
  </div>
}