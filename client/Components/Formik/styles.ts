import { StyleSheet } from 'aphrodite/no-important'
import {borders, error, isOk, text} from "../../variabels/colors"

export default StyleSheet.create({
  // Input
  inputWrapper: {
    position: 'relative',
    margin: '20px 0 30px',
    borderBottom: `1px solid ${ borders.borderInput }`
  },
  input: {
    padding: '0 0 10px 11px',
    color: '#24292e',
    backgroundColor: '#fff'
  },
  inputUser: {
    width: '100%'
  },
  icon: {
    position: 'absolute',
    top: '40%',
    transform: 'translateY(-50%)',
    right: 10,
    fontSize: 24,
    color: error,
    border: `1px solid ${ error }`,
    padding: '0 12px',
    borderRadius: '50%'
  },
  isOkColor: {
    color: isOk
  },
  error: {
    borderColor: error
  },
  label: {
    position: 'absolute',
    padding: '0 0 10px 11px',
    transition: 'transform .4s cubic-bezier(.25,.8,.25,1)',
    cursor: 'text'
  },
  labelTouched: {
    transform: 'translate3d(-23px,-23px,0) scale(.67)'
  },
  // Textarea
  wrapperTextarea: {
    position: 'relative'
  },
  textarea: {
    padding: '10px 15px',
    color: text.textInput,
    fontWeight: 600,
    width: '100%'
  },
  labelTextarea: {
    padding: '10px 14px'
  },
  textareaError: {
    bottom: 20
  }
})