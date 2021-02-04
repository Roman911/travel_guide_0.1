import { gql } from 'apollo-boost'

export const locationQuery = gql`
    query locationsSort($types: [String]) {
        locationsSort(types: $types) {
            _id
            coordinates
            isType
        }
    }
`