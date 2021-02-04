import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"

import baseStyles from '../../../styles'
import styles from './styles'

export const PopularsBlock: React.FC = () => {
  return <section className={ css(styles.wrapper) }>
    <h4>ПОПУЛЯРНІ</h4>
    <Link href='/' >
      <a className={ css(baseStyles.flex, styles.link) }>
        <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg" alt=""/>
        <span className={ css(styles.title) }>Підгорецький замок</span>
      </a>
    </Link>
    <Link href='/' >
      <a className={ css(baseStyles.flex, styles.link) }>
        <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg" alt=""/>
        <span className={ css(styles.title) }>Підгорецький замок</span>
      </a>
    </Link>
    <Link href='/' >
      <a className={ css(baseStyles.flex, styles.link) }>
        <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/oz_450.jpg" alt=""/>
        <span className={ css(styles.title) }>Олеський замок</span>
      </a>
    </Link>
    <Link href='/' >
      <a className={ css(baseStyles.flex, styles.link) }>
        <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/hf_450.jpg" alt=""/>
        <span className={ css(styles.title) }>Хотинська фортеця</span>
      </a>
    </Link>
  </section>
}