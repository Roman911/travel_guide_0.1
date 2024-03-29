import { gql } from 'apollo-boost'

export const locationQuery = gql`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      cover
      title
      small_text
      linkToPost
    }
  }
`