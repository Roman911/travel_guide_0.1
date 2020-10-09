import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { Like } from '../Components/Like'
import { addLikeMutation, removeLikeMutation } from './mutations'
import { postQuery } from '../../Post/Containers/queries'
import { modalActions } from "../../../redux/actions"

import { User } from "../../../types/user"
type MyLikesProps = {
  id: string
  likes: string[]
  post: boolean
}

export const Likes:React.FC<MyLikesProps> = ({ id, likes, post }) => {
  const user = useSelector((state: { user: User }) => state.user)
  const dispatch = useDispatch()
  const { data } = user
  const quantityLikes = likes.length
  const userId = data ? data.userId : undefined
  const userLike = likes.filter((item: string | undefined) => {
    if (item === userId) {
      return item
    }
    return 0
  })
  const [ addLike ] = useMutation(addLikeMutation)
  const [ removeLike ] = useMutation(removeLikeMutation)

  const handleChangeAdd = () => {
    if (userId) {
      addLike({
        variables: { postId: id, userId: userId },
        refetchQueries: [{
          query: postQuery,
          variables: { _id: id }
        }]
      }).then(r =>r);
    } else {
      dispatch(modalActions.showModal('Для виконання данної дії потрібно авторизоватись'))
    }
  }
  const handleChangeRemove = () => {
    removeLike({
      variables: { postId: id, userId: userId },
      refetchQueries: [{
        query: postQuery,
        variables: { _id: id }
      }]
    })
      .then(r =>r)
  }
  return <Like post={ post } quantityLikes={ quantityLikes } userLike={ userLike } handleChangeAdd={ handleChangeAdd } handleChangeRemove={ handleChangeRemove }/>
}