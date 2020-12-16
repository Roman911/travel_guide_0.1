import React from "react"
import { useQuery } from '@apollo/react-hooks'
import { getDataFromTree } from "@apollo/react-ssr"
import { locationsQuery } from '../apollo/queries/map'
import { Loading, MainLayout, Maps } from "../Components"
import withApollo from "../lib/withApollo"

const Map: React.FC = (): any => {
  const { loading, error, data } = useQuery( locationsQuery )
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { locations } = data

  return <MainLayout title='Maps' header='Карти' >
    <Maps locations={ locations } />
  </MainLayout>
}

export default withApollo(Map, { getDataFromTree })