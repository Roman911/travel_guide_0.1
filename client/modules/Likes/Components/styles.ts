import { StyleSheet } from 'aphrodite/no-important'

import { btn } from '../../../variabels/colors'

export default StyleSheet.create({
  text: {
    fontSize: 14,
    paddingLeft: 3,
    lineHeight: 0
  },
  icon: {
    height: 18,
    padding: '2px 0'
  },
  iconActive: {
    color: btn
  },
  iconPost: {
    cursor: 'pointer'
  }
})