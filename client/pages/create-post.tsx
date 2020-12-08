import React from "react"
import dynamic from "next/dynamic"
import { css } from "aphrodite/no-important"
import withApollo from "../lib/withApollo"
import { MainLayout, SectionTitle } from "../Components"
import baseStyles from '../styles'

const CreatePost = dynamic(() => import("../modules/CreatePost/Containers/CreatePost"))

const CreatePosts = () => {
  return <MainLayout title={'Create Post'} >
    <section className={ css(baseStyles.wrapper) }>
      <SectionTitle title='Редагування' />
      <CreatePost />
    </section>
  </MainLayout>
}

export default withApollo(CreatePosts)