import { useQuery } from "@apollo/react-hooks"
import { commentsQuery } from "../../../apollo/queries/posts"
import { New } from '../Components/New'
import { LoadingPost } from "../../../Components"

export const News = ({ item }) => {
  const { loading, error, data } = useQuery( commentsQuery, {
    variables: { postId: item._id }
  })
  if (loading) return <LoadingPost isPost={ false } />
  if (error) return `Error! ${error}`
  const { comments } = data

  return <New item={ item } comments={ comments } />
}