import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  wrapper: {
    width: 225,
    position: 'absolute',
    padding: '8px 16px',
    background: 'white'
  },
  triangle: {
    position: 'absolute',
    width: 0,
    height: 0
  },
  left: {
    top: '50%',
    transform: 'translateY(-50%)',
    left: -240
  },
  bottom: {
    bottom: -20
  },
  triangleForLeft: {
    top: '50%',
    transform: 'translateY(-50%)',
    right: -12,
    borderTop: '10px solid transparent',
    borderLeft: '12px solid white',
    borderBottom: '10px solid transparent'
  },
  triangleForBottom: {
    top: -12,
    left: 20,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '12px solid white'
  }
})