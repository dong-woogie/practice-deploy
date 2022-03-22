import React from 'react'
import path from 'path'
import { ChunkExtractorManager, ChunkExtractor } from '@loadable/server'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Request, Response } from 'express'
import { getDataFromTree } from '@apollo/client/react/ssr'
import fetch from 'isomorphic-fetch'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import App from '../App'
import Html from './Html'
import { GRAPHQL_URI } from '../utils'

const statsFile = path.join(__dirname, '../../dist/client/stats.json')

async function serverRender(req: Request, res: Response) {
  const extractor = new ChunkExtractor({ statsFile })

  const client = new ApolloClient({
    cache: new InMemoryCache({}),
    ssrMode: true,
    link: new HttpLink({
      uri: GRAPHQL_URI,
      fetch: fetch as any,
    }),
  })

  const Root = (
    <ChunkExtractorManager extractor={extractor}>
      <ApolloProvider client={client}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </ChunkExtractorManager>
  )

  try {
    await getDataFromTree(Root)
  } catch {}

  const content = renderToString(Root)
  const apolloState = client.extract()

  const html = `<!doctype html>\n${renderToStaticMarkup(
    <Html content={content} extractor={extractor} apolloState={apolloState} />,
  )}`

  res.send(html)
}

export default serverRender
