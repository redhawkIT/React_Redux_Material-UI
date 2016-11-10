import React, {Component, PropTypes} from 'react'

import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

import {ListItem, IconButton, IconMenu, MenuItem} from 'material-ui'
import {grey400} from 'material-ui/styles/colors'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box'
import CheckBoxBlankIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isEditing: false
    }
  }

  handleEdit = () => this.setState({isEditing: true})

  handleSave = (text) => {
    const {deleteTodo, editTodo, todo} = this.props
    // eslint-disable-next-line
    text.length ? editTodo(todo.id, text) : deleteTodo(todo.id)
    this.setState({isEditing: false})
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props

    const rightIconMenu = (
      <IconMenu iconButtonElement={<IconButton><MoreVertIcon color={grey400}/></IconButton>}>
        <MenuItem primaryText="Edit" onTouchTap={this.handleEdit}/>
        <MenuItem primaryText="Delete" onTouchTap={() => deleteTodo(todo.id)}/>
      </IconMenu>
    )

    let element
    if (this.state.isEditing) {
      element = (
        <TodoTextInput
          text={todo.text}
          isEditing={this.state.isEditing}
          onSave={this.handleSave}/>
      )
    } else {
      element = (
        <ListItem
          primaryText={todo.text}
          onTouchTap={() => completeTodo(todo.id)}
          leftIcon={todo.completed ? <CheckBoxIcon/> : <CheckBoxBlankIcon/>} rightIconButton={rightIconMenu}/>
      )
    }

    return (
      <div className={classnames({completed: todo.completed, isEditing: this.state.isEditing})}>
        {element}
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
