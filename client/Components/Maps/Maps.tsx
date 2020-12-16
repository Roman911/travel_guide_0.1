import React from "react"
import { GoogleMaps } from "../../modules"
import { Locations } from "../../types/locations"

type MyMapsProps = {
  locations: Locations
}

export const Maps: React.FC<MyMapsProps> = ({ locations }) => {
  const mapContainerStyle = { height: "calc(100vh - 200px)", width: "100%" }
  const center = { lat: 49.026151, lng: 31.483070 }
  const zoom = 6

  return <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } locations={ locations } disableDefaultUI={ false } search={ true } />
}