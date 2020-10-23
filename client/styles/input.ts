import { StyleSheet } from 'aphrodite/no-important'

import { text, borders, icons } from "../variabels/colors"

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: '6px 0',
    display: 'flex'
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  paragraph: {
    color: text.main,
    width: 250,
    fontWeight: 600
  },
  input: {
    border: `1px solid ${borders.borderInput}`,
    padding: '10px 15px',
    color: text.textInput,
    fontWeight: 600,
    width: 'calc(100% - 260px)',
    ':focus': {
      border: '1px solid black'
    }
  },
  // Radio
  inputRadio: {
    display: 'none'
  },
  labelWrapper: {
    cursor: 'pointer',
    marginRight: 15
  },
  label: {
    margin: '0 6px',
    border: `2px solid ${ icons }`,
    height: 12,
    width: 12,
    borderRadius: 12
  },
  labelActive: {
    background: icons,
    transition: '200ms'
  },
  // Select
  option: {
    margin: '6px 0',
    fontWeight: 600,
    color: text.main
  },
  //CreateLocations

})