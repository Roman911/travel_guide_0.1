import React from "react"
import { css } from "aphrodite/no-important"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { LikeIcon } from './LikeIcon'
import baseStyles from '../../../styles/'
import styles from './styles'

type MyLikeProps = {
  post: boolean
  quantityLikes: number
  userLike: boolean
  handleChangeAdd: () => void
  handleChangeRemove: () => void
}

export const Like:React.FC<MyLikeProps> = ({ post, quantityLikes, userLike, handleChangeAdd, handleChangeRemove }) => {
  const likeNumber = quantityLikes !== 0 && <p className={ css(styles.text) }>{ quantityLikes }</p>
  const className = userLike ? post ?
    css(baseStyles.icon, styles.icon, styles.iconActive, styles.iconPost) :
    css(baseStyles.icon, styles.icon, styles.iconActive) :
    post ?
      css(baseStyles.icon, styles.icon, styles.iconPost) :
      css(baseStyles.icon, styles.icon)
  const handleChange = post ? userLike ? handleChangeRemove : handleChangeAdd : () => {}
  const iconHearts = userLike ? faHeartSolid : faHeartRegular
  const likeActive = <LikeIcon className={ className } handleChange={ handleChange } iconHearts={ iconHearts } />

  return <div className={ css(baseStyles.flex) }>
    { likeActive }
    { likeNumber }
  </div>
}