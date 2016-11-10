import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import TextField from 'material-ui/TextField'

const defaultStyle = {
  marginLeft: 20
}

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      const text = e.target.value.trim()
      this.props.onSave(text)
      if(this.props.newTodo) {
        this.setState({text: ''})
      }
    }
  }

  handleChange = (e) => this.setState({text: e.target.value})

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <TextField
          onKeyDown={this.handleEnter}
          className={classnames({edit: this.props.isEditing, 'new-todo': this.props.newTodo})}
          id='new-todo-input'
          style={defaultStyle}
          type="text"
          hintText={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  isEditing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput
