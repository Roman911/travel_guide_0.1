import { StyleSheet } from 'aphrodite/no-important'

const background = `url('./logo.png')`

export default StyleSheet.create({
  logo: {
    background: background,
    width: 110,
    height: 50,
    margin: '40px auto',
    backgroundSize: 'cover'
  },
  title: {
    textAlign: 'center',
    fontSize: 56,
    fontWeight: 800,
    margin: 50
  },
  wrapperForm: {
    background: '#fff',
    padding: '10px 20px'
  },
  textP: {
    margin: '10px 0 6px'
  },
  inputSub: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputSubRegister: {
    justifyContent: 'flex-end'
  },
  resPassword: {
    fontSize: 12
  },
  bottomBlock: {
    marginTop: 15,
    textAlign: 'center'
  },
  text: {
    fontWeight: 100
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  }
})