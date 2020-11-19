import React from "react"
import { useRouter } from "next/router"
import { css } from "aphrodite/no-important"
import { getDataFromTree } from '@apollo/react-ssr'
import { MainLayout, SectionTitle } from '../../Components'
import withApollo from '../../lib/withApollo'
import { PostShow } from "../../modules"
import baseStyles from '../../styles'

const Posts:React.FC = (): any => {
  const router = useRouter()
  const _id = router.query.id

  return <MainLayout title='Post' >
    <section className={ css(baseStyles.wrapper) } >
      <SectionTitle title="Стаття"/>
      <PostShow _id={ _id } />
    </section>
  </MainLayout>
}

export default withApollo(Posts, { getDataFromTree })