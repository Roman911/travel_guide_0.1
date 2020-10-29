import { gql } from 'apollo-boost'

export const uploadImageMutation = gql`
  mutation uploadImage($imgSrc: File) {
    uploadImage(imgSrc: $imgSrc) {
      _id
    }
  }
`