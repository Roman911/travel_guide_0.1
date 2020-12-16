import React from "react"
import { Marker } from '@react-google-maps/api'

type MarkersMapProps = {
  rest: any
}

const MarkersMap: React.FC<MarkersMapProps> = ({ rest }): any => {
  const { locations, setSelectedPark } = rest.options

  return locations.map((park, index) => {
    return <Marker
      key={ index }
      onClick={() => {
        setSelectedPark(park._id )
      }}
      position={{lat: Number(park.coordinates[0]), lng: Number(park.coordinates[1])}}
      icon={{
        url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${park.isType}.png`
      }}
    />
  })
}

export default MarkersMap