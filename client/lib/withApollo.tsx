import React from 'react'
import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: process.env.GRAPHQL_URI,
      cache: new InMemoryCache().restore(initialState || {})
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={ props.apollo }>
          <Page { ...props } />
        </ApolloProvider>
      )
    }
  }
)