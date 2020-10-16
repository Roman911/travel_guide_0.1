import React from "react"
import { useQuery } from "@apollo/client"
import { commentsQuery } from "./querys"
import { CreateComment } from "./CreateComment"
import { ShowAllComments } from "./ShowAllComments"
import { Loading } from "../../../Components"

type CommentsProps = {
  id: string
}

export const Comments: React.FC<CommentsProps> = ({ id }): any => {
  const { loading, error, data } = useQuery( commentsQuery, {
    variables: { postId: id }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { comments } = data
  return <>
    <h3>КОМЕНТАРІ</h3>
    <CreateComment postId={ id } isFirstComment={ true } />
    <ShowAllComments comments={ comments } postId={ id } />
  </>
}