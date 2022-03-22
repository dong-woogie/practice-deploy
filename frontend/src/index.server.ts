import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'
import serverRender from './server/serverRender'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/public', express.static('public'))

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

  const clientConfig = require(path.join(__dirname, '../config/client-dev.config.js'))
  const serverConfig = require(path.join(__dirname, '../config/server-dev.config.js'))

  const complier = webpack([clientConfig, serverConfig])

  console.log(complier.compilers[0].name)
  console.log(complier.compilers[1].name)

  const devMiddleware = webpackDevMiddleware(complier, {
    serverSideRender: true,
    writeToDisk(filePath: string) {
      return /server-dev/.test(filePath) || /stats\.json/.test(filePath) || /\.css/.test(filePath)
    },
  })
  app.use(devMiddleware)
  app.use(webpackHotMiddleware(complier.compilers.find((complier: any) => complier.name === 'client')))

  const hotMiddleware = webpackHotServerMiddleware(complier)
  app.use('/', hotMiddleware)
} else {
  app.use(serveStatic(path.resolve('./dist/client'), { index: false }))
  app.use('/', serverRender)
}

app.listen(PORT, () => {
  console.log(`start server 🌎http://localhost:${PORT}`)
})
