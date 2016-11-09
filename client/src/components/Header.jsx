import React, {PropTypes} from 'react'
import TodoTextInput from './TodoTextInput'

import AppBar from 'material-ui/AppBar'

const defaultStyle = {
  marginLeft: 20
}

const Header = ({addTodo}) => {

  const handleSave = text => (text.length !== 0) && addTodo(text)

  return (
    <header className="header">
      <AppBar title="React + Redux + Material UI Boilerplate"/>
      <h1 style={defaultStyle}>todos</h1>
      <TodoTextInput
        newTodo={true}
        onSave={handleSave}
        placeholder="What needs to be done?"
       />
    </header>
  )
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
