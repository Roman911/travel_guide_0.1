import Link from "next/link"
import React from "react"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../styles'
import styles from './styles'
import { Links } from "./config"
import { UseRoutes } from "../../modules"

export const NavBar = () => {

  const links = Links.link.map((item, index) => {
    return <li key={ index }>
      <Link href={ item.path }><a>{ item.title }</a></Link>
    </li>
  })

  return <nav className={ css(styles.nav, baseStyles.boxShadow) }>
    <div className={ css(baseStyles.wrapper, baseStyles.flexSB) }>
      <div className={ css(baseStyles.flexSB) }>
        <div className={ css(styles.logo) } />
        <ul>
          { links }
        </ul>
      </div>
      <div className={ css(baseStyles.flexSB) }>
        <div className={ css(baseStyles.flexSB, styles.wrapperInput) }>
          <input className={ css(styles.input) } placeholder='Search' type="text"/>
          <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faSearch }/>
        </div>
        <UseRoutes />
      </div>
    </div>
  </nav>
}