import { StyleSheet } from 'aphrodite/no-important'

import { borders, shadows, text } from '../variabels/colors'

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 10,
    top: 20,
    right: 20,
    width: 400
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `4px 4px 10px 1px ${shadows.shadow}`
  },
  input: {
    padding: 10,
    fontSize: '1.4rem',
    border: `1px solid ${ borders.borderInput }`
  },
  select: {
    overflow: 'hidden',
    border: `1px solid ${ borders.borderInput }`,
    padding: 0
  },
  option: {
    padding: 10,
    fontSize: '1.2rem',
    cursor: 'pointer',
    ':hover': {
      color: text.hover
    }
  }
})