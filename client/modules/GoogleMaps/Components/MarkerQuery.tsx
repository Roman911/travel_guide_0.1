import { Marker } from '@react-google-maps/api'

const MarkerQuery = ({ rest }) => {
  const { options } = rest

  return <Marker
    position={{ lat: Number(options.lat), lng: Number(options.lng) }}
    icon={ options.isType && options.isType !== 'other' ? { url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${options.isType}.png` } : null }
  />
}

export default MarkerQuery