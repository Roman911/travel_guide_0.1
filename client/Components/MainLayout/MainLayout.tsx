import Head from "next/head"
import React from "react"
import { NavBar } from ".."

export const MainLayout = ({ children, title }) => {

  return <div>
    <Head>
      <title>
        { title } | Travel Guide
      </title>
    </Head>
    <NavBar />
    <main>
      { children }
    </main>
  </div>
}