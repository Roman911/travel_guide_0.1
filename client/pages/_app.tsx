import { Provider } from 'react-redux'
import React from "react"

import store from "../redux/store"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider store={ store } >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
