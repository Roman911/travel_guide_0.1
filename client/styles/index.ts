import { StyleSheet } from 'aphrodite/no-important'

import { widthsDescTop, heightIcons } from '../variabels/dimensions'
import { shadows, icons } from '../variabels/colors'

export default StyleSheet.create({
  wrapper: {
    maxWidth: widthsDescTop.widthL,
    margin: '0 auto',
    padding: '10px 20px'
  },
  flexSB: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexVFS: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  boxShadow: {
    boxShadow: `3px 0px 20px ${shadows.shadow}`,
  },
  icon: {
    height: heightIcons.iconXL,
    width: 'auto !important',
    color: icons
  },
})