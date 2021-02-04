import dynamic from "next/dynamic"

type MarkersMapProps = {
  rest: any
}

const MarkersMap = dynamic<MarkersMapProps>(() => import('./MarkersMap') as any)
const MarkerQuery = dynamic(() => import('./MarkerQuery') as any)

export const MarkersController = ({ control, ...rest }) => {
  switch (control) {
    case 'MarkersMap': {
      return <MarkersMap rest={ rest } />
    }
    case 'MarkerQuery': {
      return <MarkerQuery />
    }
    default:
      return null
  }
}