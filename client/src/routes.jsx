import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Info from './components/Info.jsx'

export default (
  <Route path="/" component={App}>
    {/* Show the dashboard at / */}
    <IndexRoute component={Home}/>
    <Route path="projects" component={Projects}/>
    <Route path="about" component={About}/>
    <Route path="info" component={Info}/>
  </Route>
)
