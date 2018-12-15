import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.username}. You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>
        )
    }
}