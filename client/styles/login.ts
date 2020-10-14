import { StyleSheet } from 'aphrodite/no-important'

const background = `url('./logo.png')`

export default StyleSheet.create({
  wrapper: {
    width: 340,
    margin: '20px auto'
  },
  logo: {
    background: background,
    width: 155,
    height: 70,
    margin: '0 auto',
    backgroundSize: 'cover'
  },
  title: {
    textAlign: 'center',
    fontWeight: 100,
    margin: 15
  },
  wrapperForm: {
    border: '1px solid #d8dee2',
    borderRadius: 5,
    background: '#fff',
    padding: '10px 20px'
  },
  textP: {
    margin: '10px 0 6px'
  },
  inputSub: {
    margin: '10px 0',
    textAlign: 'end'
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