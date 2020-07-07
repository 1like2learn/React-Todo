// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    
  render() {
    return (
      <div>
        {this.props.tasks.map( item => {
          return(
            <Todo key = {item.id} item = {item} toggleTask = {this.props.toggleTask}/>

          )
        })}
        <button onClick={this.props.clearCompleted}>
          Clear Purchased
        </button>
      </div>
    )
  }
}
export default TodoList