import React from 'react'

interface HtmlProps {
  content: string
  extractor: any
  apolloState: any
  // reduxState: any
}

function Html({ content, extractor, apolloState }: HtmlProps) {
  return (
    <html lang="en">
      <head>
        {extractor.getLinkElements()}
        {extractor.getStyleElements()}
        <link rel="shortcut icon" href="public/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(apolloState).replace(/</g, '\\u003c')}`,
        }}
      />

      {/* <script
        dangerouslySetInnerHTML={{
          __html: `window.__REDUX_STATE__ = ${JSON.stringify(reduxState).replace(/</g, '\\u003c')}`,
        }}
      /> */}
      {extractor.getScriptElements()}
    </html>
  )
}

export default Html
