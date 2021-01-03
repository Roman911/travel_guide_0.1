import React from "react"
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { getDataFromTree } from "@apollo/react-ssr"
import { locationsQuery } from '../apollo/queries/map'
import { Loading, MainLayout } from "../Components"
import withApollo from "../lib/withApollo"
import { GoogleMaps } from "../modules"

type GoogleMapsProps = {
  mapContainerStyle:
    {
      height: string
      width: string
    }
  center:
    {
      lat: number
      lng: number
    }
  zoom: number
}

const Map: React.FC = (): any => {
  const { mapContainerStyle, center, zoom } = useSelector((state: {googleMaps: GoogleMapsProps}) => state.googleMaps)
  const { loading, error, data } = useQuery( locationsQuery )
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { locations } = data

  return <MainLayout title='Maps' header='Карти' >
    <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } locations={ locations } disableDefaultUI={ false } search={ true } />
  </MainLayout>
}

export default withApollo(Map, { getDataFromTree })