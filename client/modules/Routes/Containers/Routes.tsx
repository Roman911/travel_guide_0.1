import React from "react"
import { useSelector, useDispatch } from 'react-redux'

import { User } from "../../../types/user"
import { IsActiveUser, IsNotActiveUser } from '../Components'
import { sidebarActions } from "../../../redux/actions"

export const UseRoutes = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: { user: User }) => state.user)
  const { data } = user

  const showSidebar = () => {
    dispatch(sidebarActions.showSidebar())
  }

  return <>
    { data ? <IsActiveUser data={ data } showSidebar={ showSidebar } /> : <IsNotActiveUser /> }
  </>
}