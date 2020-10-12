import React from "react"
import { css } from 'aphrodite/no-important'
import { useQuery } from "@apollo/react-hooks"
import { getDataFromTree } from '@apollo/react-ssr'

import withApollo from '../lib/withApollo'
import { postsQuery, commentsQuery } from "../apollo/queries/posts"
import { MainLayout, SectionTitle, LoadingPost, News } from "../Components"
import baseStyles from '../styles'
import styles from './styles'
import { UseAuth } from "../hooks/auth.hook"

const Home = () => {

  UseAuth()

  const { loading, error, data } = useQuery(postsQuery)
  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const { posts } = data
  const news = posts.map((item, index) => {
    const { loading, error, data } = useQuery( commentsQuery, {
      variables: { postId: item._id }
    })
    if (loading) return <LoadingPost key={ index } isPost={ false } />
    if (error) return `Error! ${error}`
    const { comments } = data
    return <News key={ index } item={ item } comments={ comments } />
  })

  return <MainLayout title='Home'>
    <section className={ css(baseStyles.wrapper) }>
      <SectionTitle title='Новини'/>
      <div className={css(styles.wrapper)}>
        <div className={ css(styles.news) }>
          { news }
        </div>
        <div>13132155555</div>
      </div>
    </section>
  </MainLayout>
}

export default withApollo(Home, { getDataFromTree })