import Document, { Head, Main, NextScript } from "next/document"
import React from "react"
import { StyleSheetServer } from "aphrodite"

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const {html, css} = StyleSheetServer.renderStatic(() => renderPage())
    const ids = css.renderedClassNames
    return {...html, css, ids}
  }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200&display=swap&subset=cyrillic" />
        <link rel="icon" href="/favicon.ico"/>
        <style data-aphrodite dangerouslySetInnerHTML={{__html: this.props.css.content}}/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}