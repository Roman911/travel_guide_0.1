import Head from "next/head"
import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NavBar, InformWindow } from ".."
import { ProfileSidebar } from "../../modules"
import { modalActions } from '../../redux/actions'
import { Modal } from "../../types/modal"
import { User } from "../../types/user"
import { SidebarProps } from '../../types/sidebar'

export const MainLayout = ({ children, title }) => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: { user: User }) => state.user)
  const { showSidebar } = useSelector((state: { sidebar: SidebarProps }) => state.sidebar)
  const { text, timeout } = useSelector((state: { modal: Modal }) => state.modal)

  const handleClick = () => {
    dispatch(modalActions.handleClick())
  }

  return <>
    <Head>
      <title>
        { title } | Travel Guide
      </title>
    </Head>
    <NavBar />
    <main>
      { children }
    </main>
    { text && <InformWindow id={'modal'} children={ text } closedModal={ timeout } handleClick={ handleClick } /> }
    { showSidebar && <ProfileSidebar data={ data } /> }
  </>
}