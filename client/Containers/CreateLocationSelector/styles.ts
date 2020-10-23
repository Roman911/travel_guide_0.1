import { StyleSheet } from 'aphrodite/no-important'
import { widthBlocks } from '../../variabels/dimensions'
import { text } from "../../variabels/colors"

export default StyleSheet.create({
  wrapper: {
    padding: '10px 20px',
    width: widthBlocks.locationSelect
  },
  blockInput: {
    padding: '6px 0'
  },
  paragraph: {
    fontSize: '1.1rem',
    color: text.main,
    fontWeight: 600
  },
  input: {
    width: '100%'
  }
})