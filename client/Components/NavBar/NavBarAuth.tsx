import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import styles from "./styles"

export const NavBarAuth = () => {
  return <div className={ css(styles.wrapper) }>
    <img className={ css(styles.img) } src='./logo.png' alt="logo"/>
    <Link href='/'>
      <a className={ css(styles.closed) }>
        x
      </a>
    </Link>
  </div>
}