import { StyleSheet } from 'aphrodite/no-important'

import { widthBlocks } from '../../../variabels/dimensions'
import { btn } from '../../../variabels/colors'

export default StyleSheet.create({
  wrapper: {
    width: widthBlocks.rightBlock,
    margin: '10px 5px',
    padding: 10
  },
  link: {
    margin: '15px 0',
    transition: '0.2s',
    ':hover': {
      opacity: 0.8,
      color: btn
    }
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    marginRight: 15
  },
  title: {
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: '16px'
  }
})