import React from "react"
import Image from "next/image"
import { css } from 'aphrodite/no-important'

type ImagesProps = {
  link: string
  styles: any
  width: number
  height: number
  alt: string
}

export const Images: React.FC<ImagesProps> = ({ link, styles, width, height, alt }): any => {

  if (link.indexOf('http') > -1) {
    return <img className={ css(styles) } src={ link } alt={ alt } />
  }

  return <Image className={ css(styles) } src={ link } layout='intrinsic' alt={ alt } width={ width } height={ height } />
}