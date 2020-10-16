import React from "react"
import { css } from "aphrodite/no-important"
import styles from "./styles"

type MyCommentTextProps = {
  text: string
}

export const CommentText: React.FC<MyCommentTextProps> = ({ text }) => {
  return <div className={ css(styles.blockText) }>
    <p className={ css(styles.text) }>{ text }</p>
  </div>
}