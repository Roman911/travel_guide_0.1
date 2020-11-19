import { StyleSheet } from 'aphrodite/no-important'

import { widthBlocks } from '../variabels/dimensions'

export default StyleSheet.create({
  wrapper: {
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  news: {
    width: `calc(100% - ${ widthBlocks.rightBlock }px)`,
    display: 'flex',
    flexWrap: 'wrap'
  }
})