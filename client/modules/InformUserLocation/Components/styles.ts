import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from "../../../variabels/dimensions"

export default StyleSheet.create({
  wrapper: {
    width: widthBlocks.rightBlock,
    margin: '10px 5px',
    padding: 10,
    textAlign: 'center'
  },
  content: {
    paddingBottom: 10
  },
  text: {
    fontSize: 12
  }
})