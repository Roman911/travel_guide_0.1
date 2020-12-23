import React from "react"
import withApollo from "../lib/withApollo"
import { MainLayout } from "../Components"
import { CreatePost } from "../modules"

const CreatePosts = () => {
  return <MainLayout title={'Create Post'} header='Редагування' >
    <CreatePost />
  </MainLayout>
}

export default withApollo(CreatePosts)