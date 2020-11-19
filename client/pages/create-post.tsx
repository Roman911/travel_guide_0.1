import React from "react"
import { css } from "aphrodite/no-important"
import withApollo from "../lib/withApollo"
import { MainLayout, SectionTitle } from "../Components"
import baseStyles from '../styles'
import { CreatePost } from "../modules"

const CreatePosts = () => {
  return <MainLayout title={'Create Post'} >
    <section className={ css(baseStyles.wrapper) }>
      <SectionTitle title='Редагування' />
      <CreatePost />
    </section>
  </MainLayout>
}

export default withApollo(CreatePosts)