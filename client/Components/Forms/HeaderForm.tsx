import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import loginStyles from "../../styles/login"

type HeaderFormProps = {
  title: string
  text: string
  link: string
  btn: string
}

export const HeaderForm: React.FC<HeaderFormProps> = ({ title, text, link, btn }) => {
  return <>
    <h1 className={css(loginStyles.title)}>{ title }</h1>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>{ `${ text } ` }</span>
      <Link href={ link }>
        <a>
          <span className={css(loginStyles.link)}>{ btn }</span>
        </a>
      </Link>
    </div>
  </>
}