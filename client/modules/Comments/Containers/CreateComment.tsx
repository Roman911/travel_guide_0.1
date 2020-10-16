import React from "react"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useFormik } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faOptinMonster } from "@fortawesome/free-brands-svg-icons"

import { Avatar, Button, ButtonLink } from "../../../Components"
import loginStyles from '../../../styles/login'
import styles from '../Components/styles'
import { CreateCommentMutation, AddCommentMutation } from './mutations'
import { commentsQuery } from "./querys"
import { User } from "../../../types/user"
type CreateCommentProps = {
  postId: string
  idComment?: string
  isFirstComment: boolean
  handleClick?: () => void
}

export const CreateComment: React.FC<CreateCommentProps> = ({ postId, idComment, isFirstComment, handleClick }): any => {
  const { data } = useSelector((state: { user: User }) => state.user)
  const [ createComment ] = useMutation(CreateCommentMutation)
  const [ addComment ] = useMutation(AddCommentMutation)
  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: { text: '' },
    onSubmit: (values, { resetForm }) => {
      const ref = [{
        query: commentsQuery,
        variables: { postId: postId }
      }]
      const query = {
        variables: {
          idAuthor: data.userId,
          _id: idComment,
          postId: postId,
          text: values.text
        },
        refetchQueries: ref
      }
      if (isFirstComment) {
        createComment(query).then(data => {
          if (data) {
            resetForm()
          }
        })
      } else {
        addComment(query).then(data => {
          if (data) {
            handleClick && handleClick()
            resetForm()
          }
        })
      }
    },
  })
  return <form onSubmit={ handleSubmit }>
    <div className={ css(styles.wrapper) }>
      {data ? <>
        <Avatar avatar={ data.avatar } name={ data.name } size='S' />
        <div className={ css(styles.block) }>
          <textarea id='text' className={ css(styles.textarea) } placeholder='Ваш коментар...' onChange={handleChange} onBlur={handleBlur} value={ values.text || '' } />
        </div>
      </> :<>
        <FontAwesomeIcon className={ css(styles.iconNoAvatar) } icon={ faOptinMonster } />
        <div className={ css(styles.block) }>
          <p>Привіт! Щоб коментувати, потрібно <Link href={"/login"}><a className={ css(styles.link) }>увійти</a></Link></p>
        </div>
      </>}
    </div>
    <div className={ css(loginStyles.inputSub) }>
      { isFirstComment || <ButtonLink nameBtn='Скасувати' handleClick={ handleClick } /> }
      <Button type="submit" nameBtn='Коментувати' isSubmitting={ !data } />
    </div>
  </form>
}