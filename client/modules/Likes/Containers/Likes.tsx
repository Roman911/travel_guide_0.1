import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { Like } from '../Components/Like'
import { addLikeMutation, removeLikeMutation } from './mutations'
import { modalActions } from "../../../redux/actions"

import { User } from "../../../types/user"
type MyLikesProps = {
  id: string
  likes: string[]
  post: boolean
}

export const Likes:React.FC<MyLikesProps> = ({ id, likes, post }) => {
  const [ quantityLikes, setQuantityLikes ] = useState(likes.length)
  const [ userLike, setUserLike ] = useState(false)
  const user = useSelector((state: { user: User }) => state.user)
  const dispatch = useDispatch()
  const { data } = user
  const userId = data ? data.userId : undefined

  useEffect(() => {
    likes.filter((item: string | undefined) => {
      if (item === userId) {
        setUserLike(true)
      } else {
        setUserLike(false)
      }
    })
  }, [likes, userId])

  const [ addLike ] = useMutation(addLikeMutation)
  const [ removeLike ] = useMutation(removeLikeMutation)

  const handleChangeAdd = () => {
    if (userId) {
      setQuantityLikes(quantityLikes +1)
      setUserLike(true)
      addLike({
        variables: { postId: id, userId: userId },
      }).then(r =>r)
    } else {
      dispatch(modalActions.showModal('Для виконання данної дії потрібно авторизоватись'))
    }
  }
  const handleChangeRemove = () => {
    setQuantityLikes(quantityLikes -1)
    setUserLike(false)
    removeLike({
      variables: { postId: id, userId: userId }
    })
      .then(r =>r)
  }
  return <Like post={ post } quantityLikes={ quantityLikes } userLike={ userLike } handleChangeAdd={ handleChangeAdd } handleChangeRemove={ handleChangeRemove }/>
}