import { useRouter } from "next/router"
import React, { useCallback, useRef, useState } from "react"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { Spin } from "../../Components"
import { LocationInformation } from "../../modules"
import { Search } from "./Search"
import { Locations } from "../../types/locations"

type MyGoogleMapsProps = {
  mapContainerStyle: { height: string, width: string }
  center: { lat: number, lng: number }
  zoom: number
  locations?: Locations
  disableDefaultUI: boolean
  click?: (event) => any
  search: boolean
  isType?: string | null
}
type latLng = {
  lat: number
  lng: number
}

const libraries = ["places"]

export const GoogleMaps: React.FC<MyGoogleMapsProps> = ({ mapContainerStyle, center, zoom, locations, disableDefaultUI, click, search, isType }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries
  })

  const router = useRouter()
  let query
  if (Object.keys(router.query).length !== 0) {
    query = router.query
  }

  const [ searchMarker, setSearchMarker ] = useState(false)
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
  const panTo = useCallback(({ lat, lng }) => {
    // @ts-ignore
    mapRef.current.panTo({ lat, lng })
    // @ts-ignore
    mapRef.current.setZoom(12)
    setSearchMarker(true)
  }, [])

  const [ marker, setMarker ] = useState<null | latLng>(null)
  const [ selectedPark, setSelectedPark ] = useState<null | string>(null)
  const [ closeWindow, setCloseWindow ] = useState<boolean>(false)
  const handleClick = useCallback(() => {
    setCloseWindow(true)
    setTimeout(() => {
      setSelectedPark(null)
      setCloseWindow(false)
    }, 700)
  }, [])
  const options = {
    disableDefaultUI: disableDefaultUI
  }
  const renderMap = () => {
    return <div style={{position: 'relative', width: '100%'}}>
      { search && <Search panTo={ panTo } /> }
      <GoogleMap
        mapContainerStyle={ mapContainerStyle }
        zoom={ zoom }
        center={ center }
        options={ options }
        onLoad={ onMapLoad }
        onClick={ click ? (event) => {
          click(event)
          setMarker({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          })
        } : null}
      >
        { selectedPark && <LocationInformation _id={ selectedPark } handleClick={ handleClick } closeWindow={ closeWindow } /> }
        { !query && locations && locations.map((park, index) => (
          <Marker
            key={ index }
            onClick={() => {
              setSelectedPark(park._id )
            }}
            position={{lat: Number(park.coordinates[0]), lng: Number(park.coordinates[1])}}
            icon={{
              url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${park.isType}.png`
            }}
          />
        ))}
        { marker && <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={ isType !== 'other' ? { url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${isType}.png` } : null }
        /> }
        { query && <Marker
          position={{ lat: Number(query.lat), lng: Number(query.lng) }}
          icon={ query.isType !== 'other' ? { url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${query.isType}.png` } : null }
        /> }
        { searchMarker && <Marker
          position={center}
        /> }
      </GoogleMap>
    </div>
  }
  if (loadError) {
    return <div>Неможливо завантажити карту</div>
  }
  return isLoaded ? renderMap() : <Spin />
}