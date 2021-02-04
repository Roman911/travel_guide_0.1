import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useLazyQuery } from '@apollo/client'
import { SortLocation } from "../Components/SortLocation"
import { googleMapsActions } from '../../../redux/actions'
import { locationQuery } from './queris'
import { GoogleMapsProps } from "../../../types/googleMaps"
import { locationsQuery } from "../../../apollo/queries/map"

export const SortLocations: React.FC = (): any => {
  const [ selectLocationsTrue, setSelectLocationsTrue ] = useState(false)
  const dispatch = useDispatch()
  const { selectLocations } = useSelector((state: { googleMaps: GoogleMapsProps }) => state.googleMaps)
  const [ getLocations, { data } ] = useLazyQuery(locationQuery)
  const [ getAllLocations, { data: dataAll } ] = useLazyQuery(locationsQuery)
  const locationsSort = data ? data.locationsSort : undefined
  const locationsAll = dataAll ? dataAll.locations : undefined

  useEffect(() => {
    dispatch(googleMapsActions.setLocationsSort(locationsSort))
  }, [locationsSort])

  useEffect(() => {
    dispatch(googleMapsActions.setLocationsSort(locationsAll))
  }, [locationsAll, selectLocationsTrue])

  const handleClick = (isType, select) => {
    const selectLocation = select !== undefined ? typeof select === 'boolean' ? select : select.select : true
    const dataLoc = {
      isType,
      select: selectLocation
    }
    if (typeof select === "boolean") {
      if (select) {
        getLocations({ variables: { types: isType } })
      }
      dispatch(googleMapsActions.addedLocationType(dataLoc))
    } else {
      getLocations({ variables: { types: isType } })
      dispatch(googleMapsActions.changeLocationTypeSort(dataLoc))
      if (select !== undefined) {
        if (selectLocations.length === 0) {
          getAllLocations()
          setSelectLocationsTrue(prev => !prev)
        }
      }
    }
  }

  return <SortLocation handleClick={ handleClick } selectLocations={selectLocations}/>
}