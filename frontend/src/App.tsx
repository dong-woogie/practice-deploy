import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

const HomePage = loadable(() => import('./pages/Home'))
const AboutPage = loadable(() => import('./pages/About'))

function App() {
  return (
    <div>
      <header>
        <Link to="/">Go Home Page</Link>
        <Link to="/about">Go About Page</Link>
      </header>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  )
}

export default App
