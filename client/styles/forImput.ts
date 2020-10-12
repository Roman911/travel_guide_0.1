import { StyleSheet } from 'aphrodite/no-important'
import { error, isOk } from "../variabels/colors"

export default StyleSheet.create({
  textP: {
    margin: '10px 0 6px'
  },
  inputWrapper: {
    position: 'relative'
  },
  input: {
    padding: '6px 8px',
    fontSize: 16,
    color: '#24292e',
    backgroundColor: '#fff',
    border: '1px solid #d1d5da',
    borderRadius: 3,
    boxShadow: 'inset 0 1px 2px rgba(27,31,35,.075)'
  },
  inputUser: {
    width: '100%'
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 10
  },
  errorColor: {
    color: error
  },
  isOkColor: {
    color: isOk
  },
  error: {
    borderColor: error
  }
})