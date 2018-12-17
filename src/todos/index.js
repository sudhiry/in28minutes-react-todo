import React, { Component } from 'react';
import moment from 'moment';

export default class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    description : 'Learn to Dance',
                    done: false,
                    targetDate: moment().format('MMM DD, YYYY').toUpperCase(),
                },
                {
                    id: 2,
                    description : 'Become an Expert at Angular',
                    done: false,
                    targetDate: moment().format('MMM DD, YYYY').toUpperCase(),
                },
                {
                    id: 3,
                    description : 'Visit India',
                    done: false,
                    targetDate: moment().format('MMM DD, YYYY').toUpperCase(),
                },
            ]
        }
    }

    render() {
        const todosView = this.state.todos.map(todo =>
            <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.targetDate}</td>
                <td>{todo.done.toString()}</td>
            </tr>
        );

        return (
            <>
                <h1> My Todo's</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todosView}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}