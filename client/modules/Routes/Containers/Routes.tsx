import React from "react"
import { useSelector } from 'react-redux'

import { User } from "../../../types/user"
import { IsActiveUser, IsNotActiveUser } from '../Components'

export const UseRoutes = () => {
  const user = useSelector((state: { user: User }) => state.user)
  const { data } = user

  return <div>
    { data ? <IsActiveUser data={ data } /> : <IsNotActiveUser /> }
  </div>
}