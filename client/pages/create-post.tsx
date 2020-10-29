import React from "react"
import { useSelector } from "react-redux"
import { css } from "aphrodite/no-important"
import { CreatePostSelector } from '../Containers'
import { MainLayout, SectionTitle } from "../Components"
import baseStyles from '../styles'
import { User } from "../types/user"
import withApollo from "../lib/withApollo"

const CreatePost = () => {
  const { data } = useSelector((state: { user: User }) => state.user)

  return <MainLayout title={'Create Post'}>
    <section className={ css(baseStyles.wrapper) }>
      <SectionTitle title='Редагування' />
      <CreatePostSelector data={ data } />
    </section>
  </MainLayout>
}

export default withApollo(CreatePost)