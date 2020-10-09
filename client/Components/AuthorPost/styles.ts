import { StyleSheet } from 'aphrodite/no-important'

import { icons } from "../../variabels/colors"

export default StyleSheet.create({
  blockName: {
    marginLeft: 10
  },
  isArticle: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center'
  },
  separator: {
    width: 2,
    height: 2,
    borderRadius: '50%',
    margin: '0 10px',
    background: icons
  }
})