import { ApolloClient, HttpLink } from '@apollo/client'
import { cache } from './cache'
import { GRAPHQL_URI } from './utils'

function apolloClient() {
  const client = new ApolloClient({
    cache: cache.restore((window as any).__APOLLO_STATE__),
    link: new HttpLink({
      uri: GRAPHQL_URI,
    }),
    connectToDevTools: true,
    ssrMode: true,
  })

  return client
}

export default apolloClient
