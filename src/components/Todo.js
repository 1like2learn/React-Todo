import React from 'react'

class Todo extends React.Component{
    
    render() {
        return (
            <div>{console.log('this.props', this.props)}{this.props.item.task}</div>
            
        )
    }
}
export default Todo