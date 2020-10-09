import { StyleSheet } from 'aphrodite/no-important'
import { icons } from "../../variabels/colors"
import { widthBlocks } from "../../variabels/dimensions"

const lineAnimation = {
  '0%': {
    background: '#dadada'
  },
  '50%': {
    background: '#f3f3f3'
  },
  '100%': {
    background: '#dadada'
  }
}

export default StyleSheet.create({
  wrapper: {
    margin: '15px auto',
    textAlign: 'center'
  },
  car: {
    width: 'auto !important',
    height: 25,
    color: icons,
    padding: '0 5px'
  },
  fire: {
    transform: 'rotate(170deg)',
    width: 'auto !important',
    height: 20,
    color: '#af5d3d'
  },
  //LoadingPost
  content: {
    background: '#fff',
    padding: 20,
    marginTop: 50
  },
  widthPost: {
    width: '100%'
  },
  widthNews: {
    width: widthBlocks.newsBlock
  },
  line: {
    height: 20,
    marginBottom: 15,
    borderRadius: 2,
    animationName: [lineAnimation],
    animationDuration: '2.2s',
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  },
  line100: {
    width: '100%'
  },
  line90: {
    width: '90%'
  },
  line85: {
    width: '85%'
  },
  line80: {
    width: '80%'
  },
  line75: {
    width: '75%'
  },
  line70: {
    width: '70%'
  },
  line65: {
    width: '65%'
  },
  line60: {
    width: '60%'
  },
  lineMB30: {
    marginBottom: 30
  }
})