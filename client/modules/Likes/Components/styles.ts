import { StyleSheet } from 'aphrodite/no-important'

import { socSet } from '../../../variabels'

export default StyleSheet.create({
  text: {
    fontSize: 14,
    paddingLeft: 3,
    lineHeight: 0
  },
  icon: {
    height: 18,
    padding: '2px 0',
    transition: '200ms',
    ':hover': {
      transform: 'scale(1.2, 1.2)'
    }
  },
  iconActive: {
    color: socSet.facebook
  },
  iconPost: {
    cursor: 'pointer'
  }
})