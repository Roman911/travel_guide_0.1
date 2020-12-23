import React from "react"
import { css } from 'aphrodite/no-important'
import { useQuery } from "@apollo/react-hooks"
import { getDataFromTree } from '@apollo/react-ssr'
import withApollo from '../lib/withApollo'
import { postsQuery, commentsQuery } from "../apollo/queries/posts"
import { Populars } from "../modules"
import {LoadingPost, MainLayout, News, SectionTitle} from "../Components"
import styles from '../styles/news'

const Home = () => {
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

  return <MainLayout title='Home' header='Новини' >
    <div className={css(styles.wrapper)}>
      <div className={ css(styles.news) }>
        { news }
        <SectionTitle title='Маршрути' />
      </div>
      <Populars />
    </div>
  </MainLayout>
}

export default withApollo(Home, { getDataFromTree })