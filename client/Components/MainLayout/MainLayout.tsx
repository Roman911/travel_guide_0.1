import Head from "next/head"
import React from "react"
import { useSelector } from 'react-redux'
import { NavBar, InformWindow } from ".."
import { modalActions } from '../../redux/actions'
import { Modal } from "../../types/modal"

export const MainLayout = ({ children, title }) => {
  const { text, timeout } = useSelector((state: { modal: Modal }) => state.modal)
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
    { text && <InformWindow id={'modal'} children={ text } closedModal={ timeout } handleClick={ modalActions.handleClick } /> }
  </>
}