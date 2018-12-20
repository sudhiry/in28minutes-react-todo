import React, { Component } from 'react';
import moment from 'moment';
import Service from '../services';

export default class Todos extends Component {

    constructor(props) {
        super(props);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.state = {
            todos: [
                // {
                //     id: 1,
                //     description : 'Learn to Dance',
                //     done: false,
                //     targetDate: moment().format('MMM DD, YYYY').toUpperCase(),
                // },
                // {
                //     id: 2,
                //     description : 'Become an Expert at Angular',
                //     done: false,
                //     targetDate: moment().format('MMM DD, YYYY').toUpperCase(),
                // },
                // {
                //     id: 3,
                //     description : 'Visit India',
                //     done: false,
                //     targetDate: moment().format('MMM DD, YYYY').toUpperCase(),
                // },
            ],

            message: '',
        }
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        Service.retrieveAllTodos('in28minutes').then(response => {
            this.setState({
                todos: response.data,
            })
        }).catch(error => {

        });
    }

    addTodo(event) {
        event.preventDefault()
        this.props.history.push('/todo/-1');
    }

    updateTodo(event, todo) {
        event.preventDefault()
        this.props.history.push(`/todo/${todo.id}`);
    }

    deleteTodo(e, todo) {
        console.log(`delete todo ${todo.id}`)
        Service.deleteTodo('in28minutes', todo.id).then(response => {
                console.log(response);
                this.setState({
                    message: `Delete of Todo ${todo.id} Successful!`,
                });
                this.refreshTodos();
            }
        )
    }

    render() {
        const todosView = this.state.todos.map(todo =>
            <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{moment(todo.targetDate).format('MMM DD YYYY')}</td>
                <td>{todo.done.toString()}</td>
                <td><button onClick={((e) => this.updateTodo(e, todo))} className="btn btn-success">Update</button></td>
                <td><button onClick={((e) => this.deleteTodo(e, todo))} className="btn btn-warning">Delete</button></td>
            </tr>
        );

        return (
            <>
                <h1> My Todo's</h1>
                {this.state.message && <div className="alert alert-success" >{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todosView}
                        </tbody>
                    </table>
                    <div className="row">
                        <button onClick={this.addTodo} className="btn btn-success">Add</button>
                    </div>
                </div>
            </>
        )
    }
}