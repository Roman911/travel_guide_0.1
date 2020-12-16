import { gql } from 'apollo-boost'

export const postQuery = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      cover
      createdAt
      small_text
      text
      views
      likes
      tickets
      coordinates
      location
      work_time
      isType
      editor
      locationId
      author {
        _id
        name
        avatar
      }
    }
  }
`