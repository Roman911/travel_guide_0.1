import { StyleSheet } from 'aphrodite/no-important'

import { text, borders } from "../variabels"

export default StyleSheet.create({
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  wrapperInput: {
    width: 'calc(100% - 210px)'
  },
  input: {
    border: `1px solid ${borders.borderInput}`,
    padding: '10px 15px',
    color: text.textInput,
    fontWeight: 600,
    width: 'calc(100% - 210px)',
    ':focus': {
      border: '1px solid black'
    }
  },
  // Ticket styles
  textSmall: {
    width: 120,
    fontSize: '1rem',
    marginLeft: 20
  },
  inputSmall: {
    padding: '4px 8px'
  },
  isNotActive: {
    opacity: 0.5
  }
})