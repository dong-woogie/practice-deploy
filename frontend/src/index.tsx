import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { loadableReady } from '@loadable/component'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GRAPHQL_URI } from './utils'

const client = new ApolloClient({
  cache: new InMemoryCache({}).restore((window as any).__APOLLO_STATE__),
  link: new HttpLink({
    uri: GRAPHQL_URI,
  }),
})

function ClientBootstrap() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  )
}

function render() {
  const renderFunc = module.hot ? ReactDOM.render : ReactDOM.hydrate

  return renderFunc(<ClientBootstrap />, document.getElementById('root'))
}

if (module.hot) {
  render()
  module.hot.accept()
} else {
  loadableReady(render)
}
