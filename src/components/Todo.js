import React from 'react'

class Todo extends React.Component{
    
    render() {
        console.log('value of task completed', this.props.item.completed)
        return (
            <div
                onClick = { () => this.props.toggleTask(this.props.item.id)}
                
                style = {{textDecoration: this.props.item.completed ? 'line-through' : 'none' }}
            >
                {this.props.item.task}
            </div>
            
        )
    }
}
export default Todo