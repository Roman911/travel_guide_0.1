import dynamic from "next/dynamic"

type MarkersMapProps = {
  rest: any
}

type MarkerQueryProps = {
  rest: any
}

const MarkersMap = dynamic<MarkersMapProps>(() => import('./MarkersMap') as any)
const MarkerQuery = dynamic<MarkerQueryProps>(() => import('./MarkerQuery') as any)

export const MarkersController = ({ control, ...rest }) => {
  switch (control) {
    case 'MarkersMap': {
      return <MarkersMap rest={ rest } />
    }
    case 'MarkerQuery': {
      return <MarkerQuery rest={ rest } />
    }
    default:
      return null
  }
}