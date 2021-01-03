import React from "react"
import { css } from 'aphrodite/no-important'
import { useQuery } from "@apollo/react-hooks"
import { getDataFromTree } from '@apollo/react-ssr'
import withApollo from '../lib/withApollo'
import { postsQuery } from "../apollo/queries/posts"
import { News, Populars } from "../modules"
import { MainLayout, SectionTitle } from "../Components"
import styles from '../styles/news'

const Home = () => {
  const { loading, error, data } = useQuery(postsQuery)
  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const { posts } = data
  const news = posts.map((item, index) => {
    return <News key={ index } item={ item } />
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