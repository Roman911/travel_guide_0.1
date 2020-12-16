import React, { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { InView } from 'react-intersection-observer'
import { css } from "aphrodite"
import { InformUserLocation, Likes, Populars } from "../../"
import { ArticleStats, AuthorPost, InfoBar, Spin } from "../../../Components"
import baseStyles from '../../../styles'
import styles from './styles'
import { PostData } from '../../../types/post'
import { User } from "../../../types/user"

type MyPostProps = {
  post: PostData
  user: User
}
type CommentsProps = {
  id: string
}

const Comments = dynamic<CommentsProps>(() => import('../../Comments/Containers/Comments') as any, {
  loading: () => <Spin />
})

export const Post: React.FC<MyPostProps> = ({ user, post }) => {
  const { data } = user
  const { _id, title, small_text, cover, views, likes, author, createdAt, coordinates, tickets, location, work_time, isType, editor, locationId } = post

  const [inView, setInView] = useState(false)

  const handleChange = (e) => {
    if (e) {
      setInView(e)
    }
  }

  return <div className={ css(baseStyles.flexVFS, styles.wrapperL) }>
    <div className={css(styles.wrapper, baseStyles.boxShadow)}>
      <AuthorPost isArticle={ true } author={ author } date={ createdAt }/>
      <h2 className={css(styles.title)}>{title}</h2>
      <p className={ css(styles.text) }>{small_text}</p>
      <Image className={ css(styles.img) } src={ `/assets/uploads${ cover }` } layout='intrinsic' alt={ title } width={980} height={450} />
      <div className='editorWrapper' dangerouslySetInnerHTML={{__html: editor}}/>
      <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
        <ArticleStats isArticle={ true } views={ views } comments={[]} />
        <Likes id={ _id } likes={ likes } post={ true } />
      </div>
      <InView onChange={ handleChange } >
        { inView && <Comments id={ _id } /> }
      </InView>
    </div>
    <div>
      <InfoBar coordinates={ coordinates } tickets={ tickets } location={ location } work_time={ work_time } isType={ isType } />
      { data && <InformUserLocation locationId={ locationId } user={ user } /> }
      <Populars />
    </div>
  </div>
}