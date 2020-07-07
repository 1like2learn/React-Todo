import React from 'react'

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            taskName: ''
        }
    }

    handleChanges = event => {
        this.setState({
            taskName: event.target.value
        });
        // console.log('event.target.value of handle changer', event.target.value);
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.taskName);
        console.log('this.state.taskName of handle submit:', this.state.taskName);
        this.setState({
            taskName: ""
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='taskName'
                        value={this.state.taskName}
                        onChange={this.handleChanges}

                    ></input>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}
export default TodoForm