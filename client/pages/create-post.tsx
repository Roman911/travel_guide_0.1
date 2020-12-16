import React from "react"
import dynamic from "next/dynamic"
import withApollo from "../lib/withApollo"
import { MainLayout } from "../Components"

const CreatePost = dynamic(() => import("../modules/CreatePost/Containers/CreatePost"))

const CreatePosts = () => {
  return <MainLayout title={'Create Post'} header='Редагування' >
    <CreatePost />
  </MainLayout>
}

export default withApollo(CreatePosts)