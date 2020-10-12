import React from "react"
import { useRouter } from "next/router"
import { getDataFromTree } from '@apollo/react-ssr'
import { LoadingPost, MainLayout } from '../../Components'
import { useQuery } from "@apollo/client"
import { postQuery } from "../../modules/Post/Containers/queries"
import withApollo from '../../lib/withApollo'

const Post: () => (JSX.Element | string) = (): any => {
  const router = useRouter()
  const _id = router.query.id
  const { loading, error, data } = useQuery(postQuery, {
    variables: { _id }
  })
  if (loading) return <LoadingPost isPost={ true } />
  if (error) return `Error! ${error}`
  const { post } = data

  return <MainLayout title='Post' >
    <h1>1321</h1>
  </MainLayout>
}

// @ts-ignore
export default withApollo(Post, { getDataFromTree })