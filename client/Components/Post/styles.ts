import { StyleSheet } from 'aphrodite/no-important'

import { widthsDescTop, widthBlocks } from '../../variabels/dimensions'

export default StyleSheet.create({
  wrapperL: {
    maxWidth: widthsDescTop.widthL
  },
  wrapper: {
    padding: '10px 20px',
    margin: 10,
    width: `calc(100% - ${ widthBlocks.rightBlock }px)`,
    background: '#fff'
  },
  title: {
    margin: '10px 0'
  },
  text: {
    marginBottom: 30,
    textAlign: 'justify'
  },
  subTittle: {
    fontWeight: 600
  },
  img: {
    maxWidth: '100%',
    margin: '10px auto 30px',
    display: 'block'
  }
})