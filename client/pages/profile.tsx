import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useQuery } from '@apollo/react-hooks'
import { locationsUserQuery } from '../apollo/queries/locationsUser'

import { Loading, MainLayout, ProfileMain } from "../Components"
import withApollo from "../lib/withApollo"
import { User } from '../types/user'

const Profile: React.FC = (): any => {
  const user = useSelector((state: { user: User }) => state.user)
  const [ nameSection, setNameSection ] = useState('wantToVisit')
  const { loading, error, data, refetch } = useQuery(locationsUserQuery, {
    variables: {
      userId: user.data.userId,
      action: 'wantToVisit'
    }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { locationsUserList } = data

  const handleClick = (action: string) => {
    setNameSection(action)
    refetch({
      userId: user.data.userId,
      action: action
    }).then(r => r)
  }
  return user.data &&
    <MainLayout title='Profile'>
      <ProfileMain handleClick={ handleClick } data={ user.data } nameSection={ nameSection } locationsUserList={ locationsUserList } />
    </MainLayout>
}

export default withApollo(Profile)