// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {    console.log('props', this.props.tasks)}
                {this.props.tasks.map( item => {
                    return(
                            <Todo key={item.id} item={item}/>
                    )
                })}
            </div>
        )
    }
}
export default TodoList