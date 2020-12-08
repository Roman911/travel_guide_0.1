import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { sidebarActions, userActions } from '../../../redux/actions'
import { Sidebar } from '../Components/Sidebar'
import { UserData } from '../../../types/user'
import { SidebarProps } from '../../../types/sidebar'

type ProfileSidebarProps = {
  data: UserData
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ data }) => {
  const dispatch = useDispatch()
  const { name, avatar, email } = data
  const { isOpen } = useSelector((state: { sidebar: SidebarProps }) => state.sidebar)
  const logout = () => {
    dispatch(sidebarActions.closeSidebar())
    localStorage.removeItem('userData')
    setTimeout(() => {
      dispatch(userActions.setData(null))
    }, 600)
  }

  const closeSidebar = () => {
    dispatch(sidebarActions.closeSidebar())
  }

  return <Sidebar name={ name } avatar={ avatar } email={ email } closeSidebar={ closeSidebar } isOpen={ isOpen } logout={ logout } />
}

export default ProfileSidebar