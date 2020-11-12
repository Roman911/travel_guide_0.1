import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  wrapper: {
    width: 225,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: -240,
    padding: '8px 16px'
  },
  triangle: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: -12,
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderLeft: '12px solid white',
    borderBottom: '10px solid transparent'
  }
})