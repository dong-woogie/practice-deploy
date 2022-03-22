import React from 'react'

interface HtmlProps {
  content: string
  extractor: any
  apolloState: any
  // reduxState: any
}

const favicons = [
  { rel: 'shortcut icon', href: '/public/favicon.ico' },
  { rel: 'apple-touch-icon', sizes: '57x57', href: '/public/favicons/apple-icon-57x57.png' },
  { rel: 'apple-touch-icon', sizes: '60x60', href: '/public/favicons/apple-icon-60x60.png' },
  { rel: 'apple-touch-icon', sizes: '72x72', href: '/public/favicons/apple-icon-72x72.png' },
  { rel: 'apple-touch-icon', sizes: '76x76', href: '/public/favicons/apple-icon-76x76.png' },
  { rel: 'apple-touch-icon', sizes: '114x114', href: '/public/favicons/apple-icon-114x114.png' },
  { rel: 'apple-touch-icon', sizes: '120x120', href: '/public/favicons/apple-icon-120x120.png' },
  { rel: 'apple-touch-icon', sizes: '144x144', href: '/public/favicons/apple-icon-144x144.png' },
  { rel: 'apple-touch-icon', sizes: '152x152', href: '/public/favicons/apple-icon-152x152.png' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/public/favicons/apple-icon-180x180.png' },
  { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/public/favicons/android-icon-192x192.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/public/favicons/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/public/favicons/favicon-96x96.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/public/favicons/favicon-16x16.png' },
]

function Html({ content, extractor, apolloState }: HtmlProps) {
  return (
    <html lang="en">
      <head>
        {extractor.getLinkElements()}
        {extractor.getStyleElements()}
        {favicons.map((favicon) => (
          <link rel={favicon.rel} sizes={favicon.sizes} type={favicon.type} href={favicon.href} key={favicon.href} />
        ))}
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
