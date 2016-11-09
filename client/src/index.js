import './index.css'

import React from "react"
import {render} from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './material_ui_raw_theme_file'

//Needed for React Developer Tools
window.React = React

//Needed for onTouchTap
injectTapEventPlugin()

const store = configureStore()
render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>, document.getElementById("root")
)
