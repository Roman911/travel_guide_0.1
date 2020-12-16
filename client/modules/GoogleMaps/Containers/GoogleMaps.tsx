import { useRouter } from "next/router"
import React, {useCallback, useEffect, useRef, useState} from "react"
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { Spin } from "../../../Components"
import { LocationInformation } from "../../"
import { Search } from "../../../Containers/GoogleMaps/Search"
import { Locations } from "../../../types/locations"

import { MarkersController } from '../Components/MarkersController'

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

const libraries = ["places"]

export const GoogleMaps: React.FC<MyGoogleMapsProps> = ({ mapContainerStyle, center, zoom, locations, disableDefaultUI, click, search }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries
  })
  const router = useRouter()
  const [ marker, setMarker ] = useState( { control: 'null', options: null } )
  const [ centerMap, setCenterMap ] = useState(null)

  useEffect(() => {
    setCenterMap(center)
  }, [center])

  useEffect(() => {
    if (Object.keys(router.query).length !== 0) {
      if (!router.query.id) {
        setMarker({
          control: 'MarkerQuery',
          options: router.query
        })
      } else {
        setMarker({
          control: 'MarkerQuery',
          options: locations
        })
      }
    } else if (locations) {
      setMarker({
        control: 'MarkersMap',
        options: {
          setSelectedPark: setSelectedPark,
          locations: locations
        },
      })
    }
  }, [ router, locations ])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
  const panTo = useCallback(({ lat, lng }) => {
    // @ts-ignore
    mapRef.current.panTo({ lat, lng })
    // @ts-ignore
    mapRef.current.setZoom(12)
    setMarker({
      control: 'MarkerQuery',
      options: center
    })
  }, [])

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
        center={ centerMap }
        options={ options }
        onLoad={ onMapLoad }
        onClick={ click ? (event) => {
          click(event)
          setMarker({
            control: 'MarkerQuery',
            options: {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            }
          })
        } : null}
      >
        { selectedPark && <LocationInformation _id={ selectedPark } handleClick={ handleClick } closeWindow={ closeWindow } /> }
        <MarkersController control={ marker.control } options={ marker.options } />
      </GoogleMap>
    </div>
  }
  if (loadError) {
    return <div>Неможливо завантажити карту</div>
  }
  return isLoaded ? renderMap() : <Spin />
}