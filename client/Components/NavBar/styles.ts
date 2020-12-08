import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  nav: {
    background: '#fff',
    width: '100%',
    zIndex: 2,
    top: 0
  },
  logo: {
    marginRight: 30
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    width: 150,
    paddingRight: 20
  },
  input: {
    width: '100%'
  },
  //NavBarAuth
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 50px 70px'
  },
  img: {
    height: 56
  },
  closed: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 28,
    fontWeight: 800
  }
})