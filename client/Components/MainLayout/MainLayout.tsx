import React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import { useSelector, useDispatch } from 'react-redux'
import { css } from "aphrodite/no-important"
import { NavBar, NavBarAuth, SectionTitle } from ".."
import { modalActions } from '../../redux/actions'
import { Modal } from "../../types/modal"
import { User, UserData } from "../../types/user"
import { SidebarProps } from '../../types/sidebar'
import { UseAuth } from "../../hooks/auth.hook"
import baseStyles from "../../styles"

type InformWindowProps = {
  id: string
  children: string
  closedModal: null | boolean
  handleClick: () => void
}
type ProfileSidebarProps = {
  data: UserData
}
type MainLayoutProps = {
  children: any
  title: string
  auth?: boolean
  header?: string
}

const InformWindow = dynamic<InformWindowProps>(() => import('../InformWindow/InformWindow') as any, {
  loading: () => <p>Loading...</p>
})
const ProfileSidebar =dynamic<ProfileSidebarProps>(() => import('../../modules/ProfileSidebar/Containers/ProfileSidebar') as any, {
  loading: () => <p>Loading...</p>
})

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title, auth, header }) => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: { user: User }) => state.user)
  const { showSidebar } = useSelector((state: { sidebar: SidebarProps }) => state.sidebar)
  const { text, timeout } = useSelector((state: { modal: Modal }) => state.modal)
  UseAuth()
  const handleClick = () => {
    dispatch(modalActions.handleClick())
  }

  return <>
    <Head>
      <title>
        { title } | Travel Guide
      </title>
    </Head>
    { auth ? <NavBarAuth /> : <NavBar /> }
    <main className={ css(baseStyles.wrapper) }>
      { header && <SectionTitle title={ header } /> }
      { children }
    </main>
    { text && <InformWindow id='modal' children={ text } closedModal={ timeout } handleClick={ handleClick } /> }
    { showSidebar && <ProfileSidebar data={ data } /> }
  </>
}