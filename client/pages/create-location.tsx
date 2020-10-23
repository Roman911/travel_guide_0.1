import React, {useCallback, useState} from "react"
import { css } from "aphrodite/no-important"
import { MainLayout, SectionTitle } from "../Components"
import baseStyle from '../styles'
import { GoogleMaps } from "../Containers"

import CreateLocationSelector from "../Containers/CreateLocationSelector/CreateLocationSelector"

const CreateLocation =() => {
  const [ latLng, setLatLnd ] = useState(null)
  const mapContainerStyle = { height: "calc(100vh - 200px)", width: '100%' }
  const center = { lat: 49.026151, lng: 31.483070 }
  const zoom = 6
  const click = useCallback((event) => {
    setLatLnd({
      coordinateY: event.latLng.lat(),
      coordinateX: event.latLng.lng()
    })
  }, [])
  return <MainLayout title={'Create Location'}>
    <section className={ css(baseStyle.wrapper) }>
      <SectionTitle title='Редагування' />
      <div className={css(baseStyle.boxShadow, baseStyle.wrapperCreateLocation)}>
        <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } disableDefaultUI={ false } click={ click } />
        <CreateLocationSelector
          // @ts-ignore
          latLng={ latLng }
        />
      </div>
    </section>
  </MainLayout>
}

export default CreateLocation