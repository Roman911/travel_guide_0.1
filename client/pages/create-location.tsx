import React, { useCallback, useState } from "react"
import { css } from "aphrodite/no-important"
import withApollo from "../lib/withApollo"
import baseStyle from '../styles'
import { MainLayout } from "../Components"
import { GoogleMaps } from '../modules'
import { CreateLocationSelector } from '../modules'

const CreateLocation =() => {
  const [ latLng, setLatLnd ] = useState(null)
  const [ isType, setIsType ] = useState(null)
  const mapContainerStyle = { height: "calc(100vh - 200px)", width: '100%' }
  const center = { lat: 49.026151, lng: 31.483070 }
  const zoom = 6
  const click = useCallback((event) => {
    setLatLnd({
      coordinateY: event.latLng.lat(),
      coordinateX: event.latLng.lng()
    })
  }, [])
  const isTypeSelect = (isType: string) => {
    setIsType(isType)
  }
  return <MainLayout title={'Create Location'} header='Редагування'>
    <div className={ css(baseStyle.boxShadow, baseStyle.wrapperCreateLocation) }>
      <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } disableDefaultUI={ false } click={ click } search={ true } isType={ isType } />
      <CreateLocationSelector latLng={ latLng } isTypeSelect={ isTypeSelect } />
    </div>
  </MainLayout>
}

export default withApollo(CreateLocation)