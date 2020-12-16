import { StyleSheet } from 'aphrodite/no-important'
import { btn } from '../../variabels'

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
  linkActive: {
    color: btn
  },
  //NavBarAuth
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 50px 70px'
  },
  closed: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 28,
    fontWeight: 800
  }
})