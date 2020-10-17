import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { getDataFromTree } from '@apollo/react-ssr'
import { LoadingPost, MainLayout, Post } from '../../Components'
import { useQuery } from "@apollo/client"
import { postQuery } from "../../modules/Post/Containers/queries"
import withApollo from '../../lib/withApollo'
import { User } from "../../types/user"

const Posts:React.FC = (): any => {
  const user = useSelector((state: { user: User }) => state.user)
  const router = useRouter()
  const _id = router.query.id
  const { loading, error, data } = useQuery(postQuery, {
    variables: { _id }
  })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { post } = data

  return <MainLayout title='Post' >
    <Post user={ user } post={ post }  />
  </MainLayout>
}

export default withApollo(Posts, { getDataFromTree })