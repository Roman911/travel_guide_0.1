import { StyleSheet } from 'aphrodite/no-important'

const background = `url('./logo.png') no-repeat`

export default StyleSheet.create({
  nav: {
    background: '#fff',
    width: '100%',
    zIndex: 2,
    top: 0
  },
  logo: {
    background: background,
    backgroundSize: 'cover',
    width: 100,
    height: 45,
    marginRight: 30
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    width: 150,
    paddingRight: 20
  },
  input: {
    width: '100%'
  }
})