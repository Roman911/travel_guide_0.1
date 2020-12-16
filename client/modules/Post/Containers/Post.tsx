import React from "react"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/client"
import { postQuery } from "./query"
import { LoadingPost } from "../../../Components"
import { Post } from '../Components/Post'
import { User } from "../../../types/user"

type PostShowProps = {
  _id: any
}

export const PostShow: React.FC<PostShowProps> =  ({ _id }): any => {
  const user = useSelector((state: { user: User }) => state.user)
  const { loading, error, data } = useQuery(postQuery, {
    variables: { _id }
  })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { post } = data
  return <Post post={ post } user={ user } />
}